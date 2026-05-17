import { useEffect, useRef } from 'react';

const moods = [
  { mood: "When I miss you", msg: "Ninna message scroll maadi smile maadtini 🙂", color: "#f8b4c8" },
  { mood: "When you're angry", msg: "Dummu, swalpa care togo 😤💖", color: "#ff6b9d" },
  { mood: "When you smile", msg: "Ninna smile ge addicted aagbitini 😭💛", color: "#f0c27f" },
  { mood: "When we fight", msg: "Naane text maadtini anta gothu already 😅", color: "#e891a8" },
  { mood: "When you're silent", msg: "Ninna jothe calm aagi irbahudu anisutte ✨", color: "#fde4ec" },
  { mood: "Late night talks", msg: "2 AM conversations >>> everything else 🌙", color: "#c8a8e8" },
  { mood: "Complicated days", msg: "Simple happiness = ninu 💛", color: "#f8b4c8" },
  { mood: "Always", msg: "Ninna presence tumba safe feeling kodutte 🤍", color: "#fde4ec" },
];

export default function MoodMessages() {
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
    <section id="mood-messages">
      <h2 className="section-title">Mood Messages 💬</h2>
      <p className="section-sub">What goes on in my head, Spoo...</p>
      <div className="mood-grid">
        {moods.map((m, i) => (
          <div
            key={i}
            className="mood-card glass-card fade-in"
            ref={el => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.12}s`, borderTop: `3px solid ${m.color}` }}
          >
            <div className="mood-label" style={{ color: m.color }}>{m.mood}</div>
            <p>{m.msg}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
