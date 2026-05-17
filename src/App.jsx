import { useState, useCallback, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Particles from './components/Particles';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import Reasons from './components/Reasons';
import BirthdaySpecial from './components/BirthdaySpecial';
import Quotes from './components/Quotes';
import FinalSection from './components/FinalSection';

/* ===== Main App ===== */
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [surpriseMsg, setSurpriseMsg] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  // Touch/click hearts
  useEffect(() => {
    const handleClick = (e) => {
      const heart = document.createElement('div');
      heart.className = 'touch-heart';
      heart.textContent = ['💖', '💕', '✨', '💗'][Math.floor(Math.random() * 4)];
      heart.style.left = `${e.clientX - 10}px`;
      heart.style.top = `${e.clientY - 10}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />

      {loaded && (
        <>
          <Particles />
          <MusicToggle />

          <Hero />
          <Timeline />
          <Gallery />
          <LoveLetter />
          <Reasons />
          <BirthdaySpecial />
          <Quotes />
          <FinalSection />

          {/* Hidden surprise button */}
          <button
            className="surprise-btn"
            onClick={(e) => { e.stopPropagation(); setSurpriseMsg(true); }}
            title="?"
          >
            ?
          </button>

          {/* Surprise modal */}
          {surpriseMsg && (
            <div className="wish-modal active" onClick={() => setSurpriseMsg(false)}>
              <div className="wish-modal-content glass-card" onClick={e => e.stopPropagation()}>
                <span className="emoji">💕</span>
                <p>Thank you for being my Spoo 💕</p>
                <button className="wish-modal-close" onClick={() => setSurpriseMsg(false)}>
                  Close 🤍
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
