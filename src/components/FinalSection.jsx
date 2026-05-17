import { useMemo } from 'react';

/* ===== Final Emotional Section ===== */
export default function FinalSection() {
  const hearts = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i, left: Math.random() * 100,
      delay: Math.random() * 8, duration: 6 + Math.random() * 8,
      size: 0.8 + Math.random() * 0.6,
    })), []);

  return (
    <section className="final-section" id="final">
      {/* Floating hearts */}
      <div className="particles-container">
        {hearts.map(h => (
          <div key={h.id} className="particle" style={{
            left: `${h.left}%`, animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`, fontSize: `${h.size}rem`,
          }}>💖</div>
        ))}
      </div>

      <div className="final-text">Happy Birthday, Spoorthi 💖</div>
      <div className="final-message">
        No matter how many birthdays come,<br />
        I think you'll always stay special to me.
      </div>
      <div className="final-sign">— Papu 🫶</div>
    </section>
  );
}
