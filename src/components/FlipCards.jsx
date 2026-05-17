import { useState } from 'react';

const cards = [
  { front: "Tap to reveal 💖", back: "Ninna smile nanna whole day fix maadbidutte 😭" },
  { front: "What does Vinayyyy think? 🤔", back: "Ninu nanna favorite accident 💕" },
  { front: "Secret message 🔒", back: "Class alli ninna nodakke wait madodu best part aagittu 🙂" },
  { front: "Open me ✨", back: "Ninna jothe iruvaga time fast aagutte, without you slow 😤" },
  { front: "One more? 💌", back: "Ninna hesru phone alli kanidre automatic smile 🫶" },
  { front: "Last one 🌸", back: "You're not just special, ninu necessary aagbitte nanage 💖" },
  { front: "Bonus! 🎁", back: "Next birthday kooda same website update maadtini for you 😭💕" },
  { front: "Hidden 🤫", back: "Paddu notifications >>> rest of the world 🫶" },
];

export default function FlipCards() {
  const [flipped, setFlipped] = useState(new Set());

  const toggleFlip = (i) => {
    setFlipped(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="flip-cards">
      <h2 className="section-title">Secret Messages 💌</h2>
      <p className="section-sub">Tap each card to reveal what's inside 🤫</p>
      <div className="flip-grid">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`flip-card ${flipped.has(i) ? 'flipped' : ''}`}
            onClick={() => toggleFlip(i)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front glass-card">
                <p>{c.front}</p>
              </div>
              <div className="flip-card-back glass-card">
                <p>{c.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="flip-counter" style={{ marginTop: '1.5rem', color: 'var(--pink)', fontSize: '0.9rem' }}>
        {flipped.size} / {cards.length} revealed ✨
      </p>
    </section>
  );
}
