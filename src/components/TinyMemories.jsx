import { useEffect, useRef } from 'react';

const memories = [
  { text: "Still remember waiting just to see you in class 🙂", icon: "📚" },
  { text: "The way you say 'hmmm' when you're annoyed 😤", icon: "😤" },
  { text: "Walking slowly so we could talk a little longer", icon: "🚶" },
  { text: "Your laugh when you try to act serious", icon: "😂" },
  { text: "Those random stares when you think I'm not looking 👀", icon: "👀" },
  { text: "The day you finally said yes and I couldn't stop smiling", icon: "💖" },
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
