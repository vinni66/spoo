import { useEffect, useRef } from 'react';

/* ===== Timeline Section ===== */
const events = [
  {
    emoji: '👀', title: 'The First Look', date: 'April 2',
    desc: 'The day everything quietly started.',
    img: '/assets/images/first-meet.jpg',
  },
  {
    emoji: '❤️', title: 'The Proposal', date: 'May',
    desc: 'One small step, one huge feeling.',
    img: '/assets/images/first-selfie.jpg',
  },
  {
    emoji: '💖', title: 'The Yes', date: 'May 18',
    desc: 'The moment that became unforgettable.',
    img: '/assets/images/holding-hands.jpg',
  },
  {
    emoji: '✨', title: 'Classroom Memories', date: '',
    desc: 'The little moments slowly became special.',
    img: '/assets/images/saree-look.jpg',
  },
  {
    emoji: '🎂', title: 'Today', date: 'Now',
    desc: 'Celebrating the most precious person.',
    img: '/assets/images/together.png',
  },
];

export default function Timeline() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
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
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="timeline-dot">
              <span className="timeline-dot-emoji">{ev.emoji}</span>
            </div>
            {ev.date && <div className="timeline-date">{ev.date}</div>}
            <div className="timeline-card glass-card">
              {ev.img && (
                <div className="timeline-img">
                  <img src={ev.img} alt={ev.title} loading="lazy" />
                </div>
              )}
              <div className="timeline-card-content">
                <h3>{ev.title} {ev.emoji}</h3>
                <p>{ev.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
