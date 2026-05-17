import { useState } from 'react';

/* ===== Photo Gallery with Lightbox ===== */
const photos = [
  { src: '/assets/images/memory1.png', caption: 'My favorite smile 💕', polaroid: true },
  { src: '/assets/images/memory2.png', caption: 'Cute as always ✨', polaroid: false },
  { src: '/assets/images/memory3.png', caption: 'This moment >>>', polaroid: true },
  { src: '/assets/images/hero-bg.png', caption: 'Us, always 💖', polaroid: false },
  { src: '/assets/images/cake.png', caption: 'Sweet like you 🎂', polaroid: false },
  { src: '/assets/images/love-letter.png', caption: 'Every word, for you ✨', polaroid: true },
];

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section id="gallery">
      <h2 className="section-title">Our Memories 📸</h2>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`gallery-item ${p.polaroid ? 'polaroid' : ''}`}
            onClick={() => setLightboxImg(p.src)}
          >
            <img src={p.src} alt={p.caption} loading="lazy" />
            <div className="gallery-caption">{p.caption}</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox ${lightboxImg ? 'active' : ''}`}
        onClick={() => setLightboxImg(null)}
      >
        <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
        {lightboxImg && <img src={lightboxImg} alt="Expanded view" />}
      </div>
    </section>
  );
}
