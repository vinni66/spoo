import { useState } from 'react';

/* ===== Music Toggle Button ===== */
export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    // Users can add their own audio file at /assets/music/bg-music.mp3
    setPlaying(!playing);
  };

  return (
    <button className="music-toggle" onClick={toggle} aria-label="Toggle music">
      <div className={`music-bars ${!playing ? 'paused' : ''}`}>
        <span /><span /><span /><span />
      </div>
    </button>
  );
}
