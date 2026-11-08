/**
 * Normalize a single-word answer before comparison.
 * - Unicode compatibility normalization
 * - case-insensitive comparison
 * - whitespace and punctuation are ignored
 */
export function normalizeAnswer(value: string): string {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("en-US")
    .replace(/[^\p{L}\p{N}]/gu, "");
}

/** Classic Levenshtein edit distance with O(min(a, b)) memory. */
export function levenshteinDistance(left: string, right: string): number {
  if (left === right) {
    return 0;
  }

  if (left.length === 0) {
    return right.length;
  }

  if (right.length === 0) {
    return left.length;
  }

  // Keep the shorter string in the columns to reduce memory usage.
  let rowText = left;
  let columnText = right;

  if (rowText.length < columnText.length) {
    [rowText, columnText] = [columnText, rowText];
  }

  let previousRow = Array.from(
    { length: columnText.length + 1 },
    (_, index) => index,
  );

  for (let row = 1; row <= rowText.length; row += 1) {
    const currentRow = [row];

    for (let column = 1; column <= columnText.length; column += 1) {
      const insertion = currentRow[column - 1] + 1;
      const deletion = previousRow[column] + 1;
      const substitution =
        previousRow[column - 1] +
        (rowText[row - 1] === columnText[column - 1] ? 0 : 1);

      currentRow[column] = Math.min(insertion, deletion, substitution);
    }

    previousRow = currentRow;
  }

  return previousRow[columnText.length];
}

/**
 * Conservative typo tolerance avoids accepting a different short word by
 * accident. Longer words can tolerate two edits.
 */
export function getAllowedEditDistance(expectedWord: string): number {
  const length = normalizeAnswer(expectedWord).length;

  if (length <= 3) {
    return 0;
  }

  if (length <= 7) {
    return 1;
  }

  return 2;
}

export interface AnswerCheck {
  correct: boolean;
  distance: number;
}

export function checkAnswer(
  expectedWord: string,
  userAnswer: string,
): AnswerCheck {
  const expected = normalizeAnswer(expectedWord);
  const actual = normalizeAnswer(userAnswer);

  if (actual.length === 0) {
    return {
      correct: false,
      distance: expected.length,
    };
  }

  const distance = levenshteinDistance(expected, actual);

  return {
    correct: distance <= getAllowedEditDistance(expectedWord),
    distance,
  };
}