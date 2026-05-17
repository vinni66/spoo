import { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';

/* ===== Birthday Special Section ===== */
export default function BirthdaySpecial() {
  const [blown, setBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const balloons = useMemo(() =>
    ['🎈', '🎈', '🎈', '🎈', '🎈'].map((b, i) => ({
      id: i, emoji: b,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 4,
    })), []);

  const handleWish = () => {
    setBlown(true);
    // Fire confetti
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, colors: ['#f8b4c8', '#ff6b9d', '#fde4ec', '#f0c27f'] });
    setTimeout(() => confetti({ particleCount: 80, spread: 120, origin: { y: 0.5 } }), 300);
    setTimeout(() => setShowWish(true), 1200);
  };

  return (
    <section className="birthday-section" id="birthday">
      <h2 className="section-title">Your Special Day 🎂</h2>

      {/* Floating Balloons */}
      <div className="balloons">
        {balloons.map(b => (
          <div key={b.id} className="balloon" style={{
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}>🎈</div>
        ))}
      </div>

      {/* Cake with Candles */}
      <div className="cake-container">
        <div className="candles">
          {[0,1,2].map(i => (
            <div className="candle" key={i}>
              <div className={`flame ${blown ? 'blown' : ''}`} />
            </div>
          ))}
        </div>
        <img src="/assets/images/cake.png" alt="Birthday cake" />
      </div>

      <button className="wish-btn" onClick={handleWish} disabled={blown}>
        {blown ? 'Wish Made! 🌟' : 'Make a Wish 🎂'}
      </button>

      {/* Wish Modal */}
      <div className={`wish-modal ${showWish ? 'active' : ''}`} onClick={() => setShowWish(false)}>
        <div className="wish-modal-content glass-card" onClick={e => e.stopPropagation()}>
          <span className="emoji">🌟</span>
          <p>I just wish your smile always stays the same 💖</p>
          <button className="wish-modal-close" onClick={() => setShowWish(false)}>Close 💕</button>
        </div>
      </div>
    </section>
  );
}
