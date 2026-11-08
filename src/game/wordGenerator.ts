import type { Drawing, Word } from "./types";

/** Return a shuffled copy. The original array is never mutated. */
export function shuffleArray<T>(items: readonly T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

/** Choose distinct words and attach stable IDs from their source positions. */
export function selectRandomWords(
  sourceWords: readonly string[],
  count: number,
): Word[] {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("Word count must be a positive integer.");
  }

  if (sourceWords.length < count) {
    throw new Error(
      `The word bank contains ${sourceWords.length} words; ${count} are required.`,
    );
  }

  const wordItems = sourceWords.map((text, index) => ({
    id: `word-${String(index + 1).padStart(3, "0")}`,
    text,
  }));

  return shuffleArray(wordItems).slice(0, count);
}

/** Choose a random subset of already-created drawings. */
export function selectRandomDrawings(
  drawings: readonly Drawing[],
  count: number,
): Drawing[] {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("Drawing count must be a positive integer.");
  }

  if (drawings.length < count) {
    throw new Error(
      `There are ${drawings.length} drawings; ${count} are required.`,
    );
  }

  return shuffleArray(drawings).slice(0, count);
}