import { useState } from "react";
import type { FormEvent } from "react";
import type { Drawing } from "../game/types";

interface GuessingScreenProps {
  drawings: Drawing[];
  onSubmitAnswers: (answers: Record<string, string>) => void;
}

export function GuessingScreen({ drawings, onSubmitAnswers }: GuessingScreenProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitAnswers(answers);
  }

  function updateAnswer(drawingId: string, value: string) {
    setAnswers((previous) => ({
      ...previous,
      [drawingId]: value,
    }));
  }

  return (
    <main className="page-shell guess-screen">
      <header className="game-header guess-header">
        <div>
          <div className="eyebrow">PHASE 2 · RECALL</div>
          <h1>What did you draw?</h1>
          <p className="section-description">
            Remember the original word for each drawing and type it below the card.
          </p>
        </div>
        <div className="count-pill">{drawings.length} cards</div>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="guess-grid">
          {drawings.map((drawing, index) => (
            <article className="guess-card" key={drawing.id}>
              <div className="guess-card-topline">
                <span>CARD {index + 1}</span>
              </div>
              <div className="guess-image-wrap">
                {drawing.imageDataUrl ? (
                  <img
                    src={drawing.imageDataUrl}
                    alt={`Your drawing, number ${index + 1}`}
                  />
                ) : (
                  <div className="empty-drawing">Drawing was not saved</div>
                )}
              </div>
              <label className="answer-label" htmlFor={`answer-${drawing.id}`}>
                Your word
              </label>
              <input
                id={`answer-${drawing.id}`}
                className="answer-input"
                type="text"
                inputMode="text"
                autoComplete="off"
                maxLength={40}
                placeholder="Enter your answer..."
                value={answers[drawing.id] ?? ""}
                onChange={(event) => updateAnswer(drawing.id, event.target.value)}
              />
            </article>
          ))}
        </div>

        <div className="submit-area">
          <p>Empty answers will be marked as incorrect.</p>
          <button className="button button-primary submit-button" type="submit">
            Check answers <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </main>
  );
}