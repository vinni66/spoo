import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=loading, 1=welcome, 2=tap-to-enter

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => setPhase(2), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleEnter = () => {
    setPhase(3);
    // Small delay for fade-out animation, then load the site + start music
    setTimeout(() => onComplete(), 800);
  };

  return (
    <div className={`loading-screen ${phase === 3 ? 'hide' : ''}`} style={{ cursor: phase === 2 ? 'pointer' : 'default' }}>
      {phase === 0 && (
        <>
          <div className="loading-text">For My Spoorthi 💖</div>
          <div className="loading-dots" style={{ marginTop: '2rem' }}>
            <span /><span /><span />
          </div>
        </>
      )}
      {phase === 1 && (
        <div style={{ animation: 'fadeInUp 0.8s ease', textAlign: 'center' }}>
          <div className="loading-text" style={{ marginBottom: '0.5rem' }}>
            Happy Birthday Spoorthi 🎂
          </div>
          <div className="loading-sub">Made with love by vinayyyy</div>
        </div>
      )}
      {phase === 2 && (
        <div style={{ animation: 'fadeInUp 0.8s ease', textAlign: 'center' }} onClick={handleEnter}>
          <div className="loading-text" style={{ marginBottom: '1rem' }}>
            Ready? 💖
          </div>
          <button className="enter-btn" onClick={handleEnter}>
            Tap to Enter ✨
          </button>
          <div className="loading-sub" style={{ marginTop: '1rem' }}>🎵 Music will play</div>
        </div>
      )}
    </div>
  );
}
