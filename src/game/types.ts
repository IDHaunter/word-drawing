export type GamePhase = "start" | "drawing" | "guessing" | "results";

export interface Word {
  id: string;
  text: string;
}

export interface Drawing {
  id: string;
  wordId: string;
  word: string;
  imageDataUrl: string;
}

export interface GuessResult {
  drawing: Drawing;
  answer: string;
  distance: number;
  correct: boolean;
}