import { useRef } from 'react';

export default function Hero() {
  const carouselRef = useRef(null);
  const images = [
    { src: '/assets/images/first-meet.jpg', alt: 'Our first meet' },
    { src: '/assets/images/first-selfie.jpg', alt: 'Our first selfie' },
    { src: '/assets/images/holding-hands.jpg', alt: 'Holding hands' },
    { src: '/assets/images/together-us.png', alt: 'Together us' },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-badge">🎂 May 18 — Her Special Day</div>
      <h1 className="hero-title anim-text">Happy Birthday, Spoorthi 💖</h1>
      <p className="hero-sub anim-text-delay">To the girl who changed normal days into favorite memories 💕</p>
      <p className="hero-nickname anim-text-delay2">— For my Spoo, my Dummu, my Putta, my everything 🫶</p>

      <div className="hero-featured">
        <img src="/assets/images/together.png" alt="Us together" />
      </div>

      <div className="carousel-section">
        <div className="carousel-track" ref={carouselRef}>
          {images.map((img, i) => (
            <div className="carousel-slide glass-card" key={i} style={{ padding: '0.5rem' }}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse" />
        <span>scroll down</span>
      </div>
    </section>
  );
}
