import { checkAnswer } from "./answerChecker";
import type { Drawing, GuessResult } from "./types";

export function evaluateAnswers(
  drawings: readonly Drawing[],
  answers: Readonly<Record<string, string>>,
): GuessResult[] {
  return drawings.map((drawing) => {
    const answer = answers[drawing.id] ?? "";
    const check = checkAnswer(drawing.word, answer);

    return {
      drawing,
      answer,
      distance: check.distance,
      correct: check.correct,
    };
  });
}

export function calculateScore(results: readonly GuessResult[]): {
  correct: number;
  total: number;
  percentage: number;
} {
  const total = results.length;
  const correct = results.filter((result) => result.correct).length;

  return {
    correct,
    total,
    percentage: total === 0 ? 0 : Math.round((correct / total) * 100),
  };
}

export function getScoreMessage(correct: number, total: number): string {
  if (total === 0) {
    return "Round complete.";
  }

  const ratio = correct / total;

  if (ratio === 1) {
    return "Perfect! You remembered every word.";
  }

  if (ratio >= 0.8) {
    return "Excellent result! Your memory and drawings worked well.";
  }

  if (ratio >= 0.6) {
    return "Pretty good! One more round and you can do even better.";
  }

  if (ratio >= 0.4) {
    return "Room for improvement. Maybe the drawings were a little too quick.";
  }

  return "That was mysterious! Give it another try.";
}