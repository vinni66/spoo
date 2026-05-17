import { useState } from 'react';

const questions = [
  { q: "Namma first meet yaavaga? 👀", options: ["March", "April 2", "May", "June"], correct: 1 },
  { q: "Vinayyyy ge Spoorthi alli ishta aguva thing?", options: ["Smile", "Anger", "Silence", "Everything 💖"], correct: 3 },
  { q: "First selfie yaavaga tegediddu? 📸", options: ["April", "May 10", "June", "July"], correct: 1 },
  { q: "Vinayyyy ninna yava nickname jasthi use maadtane?", options: ["Spoo", "Dummu", "Putta", "Ella use maadtane 😭"], correct: 3 },
  { q: "Namma proposal month yaavdu? ❤️", options: ["April", "May", "June", "March"], correct: 1 },
  { q: "Late night talks alli yaavaga best?", options: ["10 PM", "12 AM", "2 AM 🌙", "Any time with you"], correct: 3 },
  { q: "Vinayyyy fight aadmele first text yaardu?", options: ["Spoorthi", "Vinayyyy 😅", "No one", "Both same time"], correct: 1 },
];

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[current].correct) setScore(s => s + 1);

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(c => c + 1);
        setSelected(null);
      } else {
        setDone(true);
        setShowResult(true);
      }
    }, 1200);
  };

  const getResultMsg = () => {
    const pct = (score / questions.length) * 100;
    if (pct >= 80) return "You know us so well, Spoo 😭💖";
    if (pct >= 50) return "Not bad Dummu! But I know more about us 😏💕";
    return "Arey Spoo, namma story maretu hoyta? 😤💖";
  };

  return (
    <section id="love-quiz">
      <h2 className="section-title">How Well Do You Know Us? 💕</h2>
      <p className="section-sub">Let's test, Spoo 😏</p>

      {!done ? (
        <div className="quiz-card glass-card">
          <div className="quiz-progress">
            <div className="quiz-progress-bar" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>
          <div className="quiz-count">{current + 1} / {questions.length}</div>
          <h3 className="quiz-question">{questions[current].q}</h3>
          <div className="quiz-options">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                className={`quiz-option ${selected === i ? (i === questions[current].correct ? 'correct' : 'wrong') : ''} ${selected !== null && i === questions[current].correct ? 'correct' : ''}`}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result glass-card">
          <span className="emoji">{score >= questions.length * 0.8 ? '🥰' : score >= questions.length * 0.5 ? '😊' : '😤'}</span>
          <h3>{score} / {questions.length} correct!</h3>
          <p>{getResultMsg()}</p>
        </div>
      )}
    </section>
  );
}
