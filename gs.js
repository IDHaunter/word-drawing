'use strict';

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_EXCLUDED_DIRS = new Set([
  '.git',
  '.venv',
  'venv',
  '__pycache__',
  'node_modules',
  '.idea',
  '.vscode',
]);

const DEFAULT_EXCLUDED_FILES = new Set([
  'loki-values-default.yaml',
  'gs.js',
  'specification.md',
  '.gitignore',
  'structure.md',
  '*postman_collection.json',
  '.DS_Store',
  '*.md',
  '*.txt'
]);

/**
 * Convert a shell-style filename pattern to a regular expression.
 * Supports *, ?, and [...] wildcards used by Python's fnmatch.
 */
function globToRegExp(pattern) {
  let regex = '^';

  for (let i = 0; i < pattern.length; i += 1) {
    const char = pattern[i];

    if (char === '*') {
      regex += '.*';
    } else if (char === '?') {
      regex += '.';
    } else if (char === '[') {
      const closingIndex = pattern.indexOf(']', i + 1);

      if (closingIndex === -1) {
        regex += '\\[';
        continue;
      }

      let characterClass = pattern.slice(i + 1, closingIndex);

      if (characterClass.startsWith('!')) {
        characterClass = `^${characterClass.slice(1)}`;
      } else if (characterClass.startsWith('^')) {
        characterClass = `\\${characterClass}`;
      }

      regex += `[${characterClass.replace(/\\/g, '\\\\')}]`;
      i = closingIndex;
    } else {
      regex += char.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
    }
  }

  return new RegExp(`${regex}$`);
}

/** Check whether a filename matches any exclusion pattern. */
function isExcludedFile(filePath, excludedFiles) {
  const fileName = path.basename(filePath);

  return [...excludedFiles].some((pattern) =>
    globToRegExp(pattern).test(fileName)
  );
}

/** Return true when the file appears to be binary or cannot be inspected. */
function isBinaryFile(filePath) {
  let fileDescriptor;

  try {
    fileDescriptor = fs.openSync(filePath, 'r');

    const buffer = Buffer.alloc(8192);
    const bytesRead = fs.readSync(
      fileDescriptor,
      buffer,
      0,
      buffer.length,
      0
    );

    return buffer.subarray(0, bytesRead).includes(0);
  } catch {
    return true;
  } finally {
    if (fileDescriptor !== undefined) {
      try {
        fs.closeSync(fileDescriptor);
      } catch {
        // Ignore close errors.
      }
    }
  }
}

/** Determine filesystem entry type. */
function getEntryType(entryPath) {
  try {
    const stats = fs.statSync(entryPath);

    return {
      isDirectory: stats.isDirectory(),
      isFile: stats.isFile(),
    };
  } catch {
    return {
      isDirectory: false,
      isFile: false,
    };
  }
}

/** Build a Markdown-style directory tree. */
function buildTree(root, excludedDirs, excludedFiles) {
  const rootName = path.basename(root) || path.parse(root).root;
  const lines = [`${rootName}/`];

  function walk(directory, prefix = '') {
    let entries;

    try {
      entries = fs.readdirSync(directory).map((name) => {
        const fullPath = path.join(directory, name);

        return {
          name,
          fullPath,
          ...getEntryType(fullPath),
        };
      });
    } catch {
      return;
    }

    entries = entries
      .filter((entry) => {
        if (entry.isDirectory && excludedDirs.has(entry.name)) {
          return false;
        }

        if (
          entry.isFile &&
          isExcludedFile(entry.fullPath, excludedFiles)
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Directories come first.
        if (a.isFile !== b.isFile) {
          return a.isFile ? 1 : -1;
        }

        // Sort names case-insensitively.
        const left = a.name.toLowerCase();
        const right = b.name.toLowerCase();

        return left < right ? -1 : left > right ? 1 : 0;
      });

    entries.forEach((entry, index) => {
      const isLast = index === entries.length - 1;

      const connector = isLast ? '└── ' : '├── ';

      lines.push(
        `${prefix}${connector}${entry.name}${entry.isDirectory ? '/' : ''}`
      );

      if (entry.isDirectory) {
        const newPrefix = prefix + (isLast ? '    ' : '│   ');
        walk(entry.fullPath, newPrefix);
      }
    });
  }

  walk(root);

  return lines;
}

/** Collect text files recursively. */
function collectFiles(root, excludedDirs, excludedFiles) {
  const files = [];

  function walk(directory, relativeParts = []) {
    let names;

    try {
      names = fs.readdirSync(directory);
    } catch {
      return;
    }

    for (const name of names) {
      const fullPath = path.join(directory, name);
      const type = getEntryType(fullPath);

      if (type.isDirectory) {
        if (!excludedDirs.has(name)) {
          walk(fullPath, [...relativeParts, name]);
        }

        continue;
      }

      if (
        !type.isFile ||
        isExcludedFile(fullPath, excludedFiles)
      ) {
        continue;
      }

      if (!isBinaryFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  walk(root);

  // Sort files by relative path.
  files.sort((a, b) => {
    const left = path.relative(root, a).split(path.sep);
    const right = path.relative(root, b).split(path.sep);

    const length = Math.min(left.length, right.length);

    for (let i = 0; i < length; i += 1) {
      if (left[i] < right[i]) return -1;
      if (left[i] > right[i]) return 1;
    }

    return left.length - right.length;
  });

  return files;
}

/** Read a file as UTF-8, replacing malformed byte sequences. */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return `[Unable to read file: ${error.message}]`;
  }
}

/** Generate Markdown content for a single directory. */
function generateStructure(root) {
  const tree = buildTree(
    root,
    DEFAULT_EXCLUDED_DIRS,
    DEFAULT_EXCLUDED_FILES
  );

  const files = collectFiles(
    root,
    DEFAULT_EXCLUDED_DIRS,
    DEFAULT_EXCLUDED_FILES
  );

  const rootName = path.basename(root) || path.parse(root).root;

  const sections = [];

  // Directory title.
  sections.push(`# ${rootName}\n\n`);

  // ------------------------------------------------------------
  // 1. Directory tree
  // ------------------------------------------------------------

  sections.push('## 1. Directory tree\n\n');
  sections.push('```text\n');
  sections.push(...tree.map((line) => `${line}\n`));
  sections.push('```\n\n');

  // ------------------------------------------------------------
  // 2. File contents
  // ------------------------------------------------------------

  sections.push('## 2. Files and contents\n\n');

  for (const filePath of files) {
    const relativePath = path
      .relative(root, filePath)
      .split(path.sep)
      .join('/');

    sections.push(`### \`${relativePath}\`\n\n`);

    const content = readFile(filePath);

    // Generic code block prevents accidental Markdown termination.
    sections.push('```\n');
    sections.push(content);

    if (content && !content.endsWith('\n')) {
      sections.push('\n');
    }

    sections.push('```\n\n');
  }

  return sections.join('');
}

/** Main entry point. */
function main() {
  // Directory from which the script was launched.
  const workingDirectory = process.cwd();

  // Command-line arguments.
  const directories = process.argv.slice(2);

  // No arguments -> process current directory.
  const targets = directories.length > 0 ? directories : ['.'];

  const sections = [];

  for (const directory of targets) {
    const root = path.resolve(directory);

    let isDirectory = false;

    try {
      isDirectory = fs.statSync(root).isDirectory();
    } catch {
      // Treat missing or inaccessible paths as invalid directories.
    }

    if (!isDirectory) {
      console.warn(`WARNING: Not a directory, skipping: ${root}`);
      continue;
    }

    console.log(`Processing: ${root}`);

    sections.push(generateStructure(root));
  }

  if (sections.length === 0) {
    console.error('No valid directories to process.');
    process.exitCode = 1;
    return;
  }

  // One common output file in the working directory.
  const outputFile = path.join(workingDirectory, 'structure.md');

  const content = sections.join('\n');

  try {
    fs.writeFileSync(outputFile, content, 'utf8');
  } catch (error) {
    console.error(`Unable to write output file: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`\nStructure generated: ${outputFile}`);
}

// Execute only when launched directly.
const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  main();
}

export {
  buildTree,
  collectFiles,
  generateStructure,
  isBinaryFile,
  isExcludedFile,
  readFile,
};