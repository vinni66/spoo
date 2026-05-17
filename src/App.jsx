import { useState, useCallback, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Particles from './components/Particles';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import TinyMemories from './components/TinyMemories';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import MoodMessages from './components/MoodMessages';
import Reasons from './components/Reasons';
import FlipCards from './components/FlipCards';
import LoveQuiz from './components/LoveQuiz';
import BirthdaySpecial from './components/BirthdaySpecial';
import WishWall from './components/WishWall';
import Quotes from './components/Quotes';
import FinalSection from './components/FinalSection';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [surpriseMsg, setSurpriseMsg] = useState(false);
  const [hiddenMsg, setHiddenMsg] = useState(false);

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
          <TinyMemories />
          <Gallery />
          <LoveLetter />
          <MoodMessages />
          <Reasons />
          <FlipCards />
          <LoveQuiz />
          <BirthdaySpecial />
          <WishWall />
          <Quotes />
          <FinalSection />

          {/* Hidden surprise — bottom left */}
          <button className="surprise-btn" onClick={(e) => { e.stopPropagation(); setSurpriseMsg(true); }} title="?">?</button>

          {/* Hidden heart — top left, very subtle */}
          <button className="hidden-heart-btn" onClick={(e) => { e.stopPropagation(); setHiddenMsg(true); }}>💗</button>

          {surpriseMsg && (
            <div className="wish-modal active" onClick={() => setSurpriseMsg(false)}>
              <div className="wish-modal-content glass-card" onClick={e => e.stopPropagation()}>
                <span className="emoji">💕</span>
                <p>Dummu, ninu tumba special 💛<br/>Tap madidya 😭💖</p>
                <button className="wish-modal-close" onClick={() => setSurpriseMsg(false)}>Close 🤍</button>
              </div>
            </div>
          )}

          {hiddenMsg && (
            <div className="wish-modal active" onClick={() => setHiddenMsg(false)}>
              <div className="wish-modal-content glass-card" onClick={e => e.stopPropagation()}>
                <span className="emoji">💖</span>
                <p>Vinayyyyy loves Spoorthi endlessly 💕</p>
                <button className="wish-modal-close" onClick={() => setHiddenMsg(false)}>Close 🤍</button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
