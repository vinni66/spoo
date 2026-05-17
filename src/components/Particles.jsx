import { useEffect, useRef, useMemo } from 'react';

/* ===== Floating Particles Background ===== */
export default function Particles() {
  const particles = useMemo(() => {
    const emojis = ['💖', '✨', '💕', '🌸', '💗', '⭐', '🤍', '💫'];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 0.6 + Math.random() * 0.8,
    }));
  }, []);

  return (
    <div className="particles-container">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}rem`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}
