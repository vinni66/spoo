import { useEffect, useRef } from 'react';

/* ===== Reasons I Like You Section ===== */
const reasons = [
  { emoji: '😊', text: 'Your smile fixes my mood.' },
  { emoji: '✨', text: 'You make normal moments special.' },
  { emoji: '☮️', text: 'Talking to you feels peaceful.' },
  { emoji: '🏠', text: 'You became my comfort person.' },
  { emoji: '💖', text: 'Your presence feels like home.' },
  { emoji: '🤫', text: 'Even your silence feels nice.' },
];

export default function Reasons() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.2 }
    );
    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reasons">
      <h2 className="section-title">Why You're Special 💕</h2>
      <div className="reasons-grid">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="reason-card glass-card"
            ref={el => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="emoji">{r.emoji}</span>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
