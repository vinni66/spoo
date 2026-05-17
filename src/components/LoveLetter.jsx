import { useState, useEffect, useRef } from 'react';

const fullText = `Honestly, ninna life-ge banda mele tumba things change aaythu. Earlier normal anso moments kooda ivaga special ansutte. Ninna message, ninna smile, ninna small reactions — ivella slowly nanna daily happiness aagbitu 🙂

Naanu perfect person alla, words kooda always correct aagi baralla. Aadru ninna mele iruva care mattu feeling tumba genuine. Ninna jothe iruvaga calm ansutte, safe ansutte, happy ansutte 🤍

Still remember aa small-small moments… class alli nododu, unnecessary smile madodu, wait madodu 😭💕
Slow aagi start aada ee feeling ivaga nanna favorite part of life aagide.

Ninna smile yavaglu hinge irali. Stress kammi, happiness jasthi, and heart full peaceful aagirali ✨
Birthday today nindhe, aadre happy feeling swalpa nangu ide because ninna life alli irakke chance sikthu 💖

Thanks for being my Spoo, my Dummu, my Putta, my favorite person 🫶

Happy Birthday once again 🎂💛`;

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
    }, 25);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="love-letter-section" id="love-letter" ref={sectionRef}>
      <h2 className="section-title">A Letter From vinayyyy 💌</h2>
      <div className="love-letter glass-card">
        <div className="from">Dear Spoorthi 💖,</div>
        <p>
          {displayed}
          {displayed.length < fullText.length && <span className="typewriter" />}
        </p>
        {displayed.length >= fullText.length && (
          <div className="letter-sign">— Vinayyyyy 🫶</div>
        )}
      </div>
    </section>
  );
}
