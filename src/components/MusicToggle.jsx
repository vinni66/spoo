import { useState, useRef, useEffect, useCallback } from 'react';

const songs = [
  { src: '/assets/music/endendigu.mp3', name: 'Endendigu', startAt: 0 },
  { src: '/assets/music/muddu-magale.mp3', name: 'Muddu Magale', startAt: 16 },
];

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [songIdx, setSongIdx] = useState(0);
  const [showName, setShowName] = useState(false);
  const audioRef = useRef(null);

  // Play immediately on mount — this component only mounts after user taps "Enter"
  useEffect(() => {
    const audio = new Audio(songs[0].src);
    audio.loop = true;
    audio.volume = 0.5;
    audio.currentTime = songs[0].startAt;
    audioRef.current = audio;

    // Play right away — user already tapped so browser allows it
    audio.play().then(() => {
      setPlaying(true);
      setShowName(true);
      setTimeout(() => setShowName(false), 3000);
    }).catch(() => {});

    return () => { audio.pause(); audio.src = ''; };
  }, []);

  const togglePlay = useCallback((e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  const switchSong = useCallback((e) => {
    e.stopPropagation();
    const nextIdx = (songIdx + 1) % songs.length;
    setSongIdx(nextIdx);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = songs[nextIdx].src;
      audioRef.current.currentTime = songs[nextIdx].startAt;
      audioRef.current.play().then(() => {
        setPlaying(true);
        setShowName(true);
        setTimeout(() => setShowName(false), 3000);
      }).catch(() => {});
    }
  }, [songIdx]);

  return (
    <>
      <div className="music-controls">
        <button className="music-toggle" onClick={togglePlay} aria-label="Toggle music">
          <div className={`music-bars ${!playing ? 'paused' : ''}`}>
            <span /><span /><span /><span />
          </div>
        </button>
        <button className="music-switch" onClick={switchSong} aria-label="Switch song">
          ⏭
        </button>
      </div>
      {showName && (
        <div className="music-name">
          🎵 {songs[songIdx].name}
        </div>
      )}
    </>
  );
}
