import { useMemo, useState, useEffect, useRef } from 'react';

const finalLine = "Somehow, you became my favorite part of life 💖";

export default function FinalSection() {
  const [typed, setTyped] = useState('');
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  const hearts = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i, left: Math.random() * 100,
      delay: Math.random() * 8, duration: 6 + Math.random() * 8,
      size: 0.8 + Math.random() * 0.6,
    })), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < finalLine.length) { setTyped(finalLine.slice(0, i + 1)); i++; }
      else clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="final-section" id="final" ref={sectionRef}>
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
      <div className="final-typewriter">
        {typed}<span className="typewriter" />
      </div>
      <div className="final-sign">— vinayyyy 🫶</div>
    </section>
  );
}
