import { useEffect, useRef } from 'react';

/* ===== Timeline Section ===== */
const events = [
  { emoji: '👀', title: 'The First Look', date: 'April 2', desc: 'The day everything quietly started.' },
  { emoji: '❤️', title: 'The Proposal', date: 'May', desc: 'One small step, one huge feeling.' },
  { emoji: '💖', title: 'The Yes', date: 'May 18', desc: 'The moment that became unforgettable.' },
  { emoji: '✨', title: 'Classroom Memories', date: '', desc: 'The little moments slowly became special.' },
  { emoji: '🎂', title: 'Today', date: 'Now', desc: 'Celebrating the most precious person.' },
];

export default function Timeline() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.2 }
    );
    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline">
      <h2 className="section-title">Our Little Story 💫</h2>
      <div className="timeline">
        {events.map((ev, i) => (
          <div
            key={i}
            className="timeline-item"
            ref={el => (itemsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="timeline-dot" />
            {ev.date && <div className="timeline-date">{ev.date}</div>}
            <div className="timeline-card glass-card">
              <h3>{ev.title} {ev.emoji}</h3>
              <p>{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
