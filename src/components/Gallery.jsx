import { useState } from 'react';

/* ===== Photo Gallery with Lightbox ===== */
const photos = [
  { src: '/assets/images/first-meet.jpg', caption: 'Where it all began 👀', polaroid: true },
  { src: '/assets/images/first-selfie.jpg', caption: 'Our first selfie 💕', polaroid: false },
  { src: '/assets/images/holding-hands.jpg', caption: 'First time holding your hand 🤝', polaroid: true },
  { src: '/assets/images/together.png', caption: 'Us, always 💖', polaroid: false },
  { src: '/assets/images/together-us.png', caption: 'Together forever ✨', polaroid: true },
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
