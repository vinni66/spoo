import { useState, useEffect, useRef } from 'react';

/* ===== Love Letter with Typewriter Effect ===== */
const fullText = `You made ordinary days feel special without even trying. Your smile, your presence, your small habits — everything slowly became important to me.

I don't know what the future looks like, but I know you became one of my happiest parts. You turned simple moments into memories I keep replaying.

Some feelings don't need big words. You just feel them quietly, and they stay. That's what you are to me — something quiet, something real, something I never want to lose.

Happy Birthday, Spoorthi. You deserve every beautiful thing in this world. 💖`;

export default function LoveLetter() {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

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
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="love-letter-section" id="love-letter" ref={sectionRef}>
      <h2 className="section-title">A Letter From Papu 💌</h2>
      <div className="love-letter glass-card">
        <div className="from">Dear Spoorthi,</div>
        <p>
          {displayed}
          {displayed.length < fullText.length && <span className="typewriter" />}
        </p>
      </div>
    </section>
  );
}
