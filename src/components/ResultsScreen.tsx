import { calculateScore, getScoreMessage } from "../game/scoring";
import type { GuessResult } from "../game/types";

interface ResultsScreenProps {
  results: GuessResult[];
  onPlayAgain: () => void;
}

export function ResultsScreen({ results, onPlayAgain }: ResultsScreenProps) {
  const score = calculateScore(results);
  const message = getScoreMessage(score.correct, score.total);

  return (
    <main className="page-shell results-screen">
      <section className="score-panel">
        <div className="eyebrow">ROUND COMPLETE</div>
        <div className="score-number">
          {score.correct}<span>/{score.total}</span>
        </div>
        <h1>{message}</h1>
        <p className="score-subtitle">
          You correctly guessed {score.correct} of {score.total} drawings · {score.percentage}%
        </p>
        <div
          className="score-track"
          role="progressbar"
          aria-label="Final score"
          aria-valuemin={0}
          aria-valuemax={score.total}
          aria-valuenow={score.correct}
        >
          <div className="score-fill" style={{ width: `${score.percentage}%` }} />
        </div>
      </section>

      <section className="review-section">
        <div className="review-heading">
          <div>
            <div className="eyebrow">ANSWER REVIEW</div>
            <h2>All cards</h2>
          </div>
          <span className="count-pill">{score.total} drawings</span>
        </div>

        <div className="results-grid">
          {results.map((result, index) => (
            <article
              className={`result-card ${result.correct ? "result-correct" : "result-wrong"}`}
              key={result.drawing.id}
            >
              <div className="result-image-wrap">
                {result.drawing.imageDataUrl ? (
                  <img
                    src={result.drawing.imageDataUrl}
                    alt={`Drawing ${index + 1}`}
                  />
                ) : (
                  <div className="empty-drawing">No drawing</div>
                )}
              </div>
              <div className="result-copy">
                <span className="result-status">
                  {result.correct ? "✓ Correct" : "✕ Not guessed"}
                  {result.correct && result.distance > 0 ? " · with a typo" : ""}
                </span>
                <div className="result-expected">{result.drawing.word}</div>
                <div className="result-answer">
                  Your answer: {result.answer.trim() || "—"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="play-again-area">
        <button className="button button-primary" onClick={onPlayAgain}>
          Play Again <span aria-hidden="true">↻</span>
        </button>
      </div>
    </main>
  );
}