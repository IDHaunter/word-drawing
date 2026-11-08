import { useCallback, useState } from "react";
import wordBank from "./data/words.json";
import { DrawingScreen } from "./components/DrawingScreen";
import { GuessingScreen } from "./components/GuessingScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { StartScreen } from "./components/StartScreen";
import { DRAWING_DURATION_SECONDS, DRAWING_WORD_COUNT, GUESS_CARD_COUNT } from "./game/config";
import { evaluateAnswers } from "./game/scoring";
import { selectRandomDrawings, selectRandomWords } from "./game/wordGenerator";
import type { Drawing, GamePhase, GuessResult, Word } from "./game/types";
import "./index.css";

const sourceWords = wordBank as string[];

export default function App() {
  const [phase, setPhase] = useState<GamePhase>("start");
  const [roundWords, setRoundWords] = useState<Word[]>([]);
  const [guessDrawings, setGuessDrawings] = useState<Drawing[]>([]);
  const [results, setResults] = useState<GuessResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const startNewRound = useCallback(() => {
    try {
      const selectedWords = selectRandomWords(sourceWords, DRAWING_WORD_COUNT);
      setRoundWords(selectedWords);
      setGuessDrawings([]);
      setResults([]);
      setError(null);
      setPhase("drawing");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not start a new round.",
      );
      setPhase("start");
    }
  }, []);

  const handleDrawingComplete = useCallback((drawings: Drawing[]) => {
    try {
      setGuessDrawings(selectRandomDrawings(drawings, GUESS_CARD_COUNT));
      setPhase("guessing");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not prepare the guessing cards.",
      );
      setPhase("start");
    }
  }, []);

  const handleGuessSubmit = useCallback(
    (answers: Record<string, string>) => {
      setResults(evaluateAnswers(guessDrawings, answers));
      setPhase("results");
    },
    [guessDrawings],
  );

  return (
    <div className="app-root">
      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      {phase === "start" && (
        <StartScreen
          wordCount={DRAWING_WORD_COUNT}
          guessCount={GUESS_CARD_COUNT}
          secondsPerWord={DRAWING_DURATION_SECONDS}
          onStart={startNewRound}
        />
      )}

      {phase === "drawing" && (
        <DrawingScreen words={roundWords} onComplete={handleDrawingComplete} />
      )}

      {phase === "guessing" && (
        <GuessingScreen drawings={guessDrawings} onSubmitAnswers={handleGuessSubmit} />
      )}

      {phase === "results" && (
        <ResultsScreen results={results} onPlayAgain={startNewRound} />
      )}
    </div>
  );
}