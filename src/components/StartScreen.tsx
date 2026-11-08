interface StartScreenProps {
  wordCount: number;
  guessCount: number;
  secondsPerWord: number;
  onStart: () => void;
}

export function StartScreen({
  wordCount,
  guessCount,
  secondsPerWord,
  onStart,
}: StartScreenProps) {
  return (
    <main className="page-shell start-screen">
      <section className="hero-panel">
        <div className="eyebrow">A QUICK MEMORY GAME</div>
        <div className="hero-emoji" aria-hidden="true">
          ✏️
        </div>
        <h1>Draw &amp; Recall</h1>
        <p className="hero-description">
          You only have a few seconds to turn each word into a drawing.
          Then try to remember what you drew.
        </p>

        <div className="rules-grid" aria-label="Round rules">
          <div className="rule-card">
            <strong>{wordCount}</strong>
            <span>words to draw</span>
          </div>
          <div className="rule-card">
            <strong>{secondsPerWord} sec</strong>
            <span>for each word</span>
          </div>
          <div className="rule-card">
            <strong>{guessCount}</strong>
            <span>drawings to guess</span>
          </div>
        </div>

        <button className="button button-primary start-button" onClick={onStart}>
          Start Game <span aria-hidden="true">→</span>
        </button>
        <p className="small-note">
          Draw with a mouse, finger, or stylus. No artistic skills required!
        </p>
      </section>
    </main>
  );
}