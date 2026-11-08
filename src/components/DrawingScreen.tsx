import { useEffect, useRef, useState } from "react";
import { DrawingCanvas } from "./DrawingCanvas";
import type { DrawingCanvasHandle } from "./DrawingCanvas";
import { DRAWING_DURATION_MS, DRAWING_DURATION_SECONDS } from "../game/config";
import type { Drawing, Word } from "../game/types";

interface DrawingScreenProps {
  words: Word[];
  onComplete: (drawings: Drawing[]) => void;
}

export function DrawingScreen({ words, onComplete }: DrawingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DRAWING_DURATION_SECONDS);
  const canvasRef = useRef<DrawingCanvasHandle>(null);
  const drawingsRef = useRef<Drawing[]>([]);
  const currentWord = words[currentIndex];

  useEffect(() => {
    if (!currentWord) {
      return;
    }

    const deadline = performance.now() + DRAWING_DURATION_MS;
    let completed = false;
    let intervalId: number;

    const tick = () => {
      const remainingMs = Math.max(0, deadline - performance.now());
      setTimeLeft(remainingMs / 1_000);

      if (remainingMs > 0 || completed) {
        return;
      }

      completed = true;
      window.clearInterval(intervalId);

      const drawing: Drawing = {
        id: `drawing-${currentIndex + 1}`,
        wordId: currentWord.id,
        word: currentWord.text,
        imageDataUrl: canvasRef.current?.toDataUrl() ?? "",
      };

      const updatedDrawings = [...drawingsRef.current, drawing];
      drawingsRef.current = updatedDrawings;

      if (currentIndex + 1 >= words.length) {
        onComplete(updatedDrawings);
      } else {
        setCurrentIndex((index) => index + 1);
        setTimeLeft(DRAWING_DURATION_SECONDS);
      }
    };

    intervalId = window.setInterval(tick, 25);
    tick();

    return () => {
      window.clearInterval(intervalId);
    };
  }, [currentIndex, currentWord, onComplete, words.length]);

  if (!currentWord) {
    return <main className="page-shell"><p>Could not load the words for this round.</p></main>;
  }

  const progress = ((currentIndex + 1) / words.length) * 100;
  const displayedTime = Math.max(0, timeLeft).toFixed(1);

  return (
    <main className="page-shell game-screen">
      <header className="game-header">
        <div>
          <div className="eyebrow">PHASE 1 · DRAWING</div>
          <h1>Draw this word</h1>
        </div>
        <div className={`timer-pill ${timeLeft <= 1 ? "timer-warning" : ""}`}>
          <span className="timer-dot" aria-hidden="true" />
          <span>{displayedTime} sec</span>
        </div>
      </header>

      <div className="progress-meta">
        <span>Card {currentIndex + 1} of {words.length}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={words.length}
        aria-valuenow={currentIndex + 1}
        aria-label="Drawing progress"
      >
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <section className="drawing-panel">
        <div className="word-prompt">{currentWord.text}</div>
        <p className="instruction-text">Quickly draw what this word means</p>
        <DrawingCanvas key={currentIndex} ref={canvasRef} />
        <p className="canvas-hint">Your drawing will be saved automatically when time runs out</p>
      </section>
    </main>
  );
}