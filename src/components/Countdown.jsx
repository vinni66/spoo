import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Target: May 18, 2026 00:00:00 IST
const TARGET = new Date('2026-05-18T00:00:00+05:30').getTime();

export default function Countdown({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [done, setDone] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    // Check if already past midnight
    if (Date.now() >= TARGET) {
      setDone(true);
      setCelebrating(true);
      fireConfetti();
      setTimeout(() => onComplete(), 4000);
      return;
    }

    const interval = setInterval(() => {
      const diff = TARGET - Date.now();
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ h: 0, m: 0, s: 0 });
        setDone(true);
        setCelebrating(true);
        fireConfetti();
        setTimeout(() => onComplete(), 4000);
      } else {
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setTimeLeft({ h, m, s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  const fireConfetti = () => {
    // Multiple confetti bursts
    const colors = ['#f8b4c8', '#ff6b9d', '#fde4ec', '#f0c27f', '#ffffff'];
    confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors });
    setTimeout(() => confetti({ particleCount: 150, spread: 90, origin: { y: 0.6, x: 0.3 }, colors }), 500);
    setTimeout(() => confetti({ particleCount: 150, spread: 90, origin: { y: 0.6, x: 0.7 }, colors }), 1000);
    setTimeout(() => confetti({ particleCount: 100, spread: 160, origin: { y: 0.4 }, colors }), 1500);
  };

  const pad = (n) => String(n).padStart(2, '0');

  if (done && celebrating) {
    return (
      <div className="countdown-screen">
        <div className="countdown-celebrate">
          <div className="countdown-emoji-burst">🎂</div>
          <h1 className="countdown-title celebrate-text">
            Happy Birthday Spoorthi! 💖
          </h1>
          <p className="countdown-sub">May 18 is HERE! 🎉✨</p>
          <p className="countdown-sub" style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
            Entering your surprise...
          </p>
        </div>
      </div>
    );
  }

  if (!timeLeft) return null;

  return (
    <div className="countdown-screen">
      <div className="countdown-content">
        <p className="countdown-label">✨ Spoorthi's birthday starts in ✨</p>
        <div className="countdown-timer">
          <div className="countdown-unit">
            <span className="countdown-num">{pad(timeLeft.h)}</span>
            <span className="countdown-unit-label">hours</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-num">{pad(timeLeft.m)}</span>
            <span className="countdown-unit-label">mins</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-num">{pad(timeLeft.s)}</span>
            <span className="countdown-unit-label">secs</span>
          </div>
        </div>
        <p className="countdown-sub">May 18, 2026 🎂</p>
        <p className="countdown-waiting">Waiting for midnight... 🌙</p>
      </div>
    </div>
  );
}
