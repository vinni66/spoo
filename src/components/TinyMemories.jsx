import { useEffect, useRef } from 'react';

const memories = [
  { text: "Still remember aa first look 👀", icon: "👀" },
  { text: "Proposal time alli heart full fast beat aagittu 😭", icon: "❤️" },
  { text: "May 18 ❤️ forever special", icon: "📅" },
  { text: "Classroom moments >>> everything", icon: "📚" },
  { text: "Ninna nodakke unnecessary rounds hakiddu worth it 😂", icon: "🚶" },
  { text: "Small conversations became best memories 💕", icon: "💬" },
  { text: "Eye contact alli half story aagittu 😭", icon: "👁️" },
  { text: "Aa smile inda problem start aaythu 💘", icon: "😊" },
];

export default function TinyMemories() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tiny-memories">
      <h2 className="section-title">Tiny Memories That Stayed 🌸</h2>
      <p className="section-sub">The small things that quietly became everything</p>
      <div className="memories-grid">
        {memories.map((m, i) => (
          <div
            key={i}
            className="memory-card glass-card fade-in"
            ref={el => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s`, transform: `rotate(${(i % 2 === 0 ? -2 : 2)}deg)` }}
          >
            <span className="memory-icon">{m.icon}</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
