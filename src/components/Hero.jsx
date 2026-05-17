import { useRef } from 'react';

/* ===== Hero Section ===== */
export default function Hero() {
  const carouselRef = useRef(null);
  const images = [
    { src: '/assets/images/memory1.png', alt: 'Memory 1' },
    { src: '/assets/images/memory2.png', alt: 'Memory 2' },
    { src: '/assets/images/memory3.png', alt: 'Memory 3' },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-badge">🎂 May 18 — Her Special Day</div>
      <h1 className="hero-title">Happy Birthday, Spoorthi 💕</h1>
      <p className="hero-sub">Every moment with you became a beautiful memory.</p>

      {/* Photo Carousel */}
      <div className="carousel-section">
        <div className="carousel-track" ref={carouselRef}>
          {images.map((img, i) => (
            <div className="carousel-slide glass-card" key={i} style={{ padding: '0.5rem' }}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse" />
        <span>scroll down</span>
      </div>
    </section>
  );
}
