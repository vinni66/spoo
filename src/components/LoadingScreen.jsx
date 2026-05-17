import { useState, useEffect } from 'react';

/* ===== Loading Screen Component ===== */
export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=loading, 1=welcome, 2=done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => { setPhase(2); onComplete(); }, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${phase === 2 ? 'hide' : ''}`}>
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
          <div className="loading-sub">Made with love by Papu</div>
        </div>
      )}
    </div>
  );
}
