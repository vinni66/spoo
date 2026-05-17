import { useState } from 'react';

const wishes = [
  { from: "Vinayyyy", msg: "Happy Birthday Spoo 💖 Ninna smile yavaglu hinge irali 🫶", color: "#f8b4c8" },
  { from: "Your Comfort Person", msg: "Ninu special, ninu important, ninu my favorite 🤍", color: "#c8a8e8" },
  { from: "Future Vinayyyy", msg: "Next year kooda same love, same care, extra surprises 😭💕", color: "#f0c27f" },
  { from: "Late Night Vinayyyy", msg: "2 AM alli yochne maadtidde... ninu happy irbeku anta 🌙", color: "#fde4ec" },
  { from: "Angry Vinayyyy", msg: "Fight aadru nanage ninnane beku 😤💖", color: "#ff6b9d" },
  { from: "Proud Vinayyyy", msg: "Ninna life alli iruva chance sigiddu nanna luck 🍀✨", color: "#a8d8c8" },
];

export default function WishWall() {
  const [likes, setLikes] = useState(new Array(wishes.length).fill(false));

  const toggleLike = (i) => {
    setLikes(prev => { const n = [...prev]; n[i] = !n[i]; return n; });
  };

  return (
    <section id="wish-wall">
      <h2 className="section-title">Birthday Wish Wall 🎂</h2>
      <p className="section-sub">Every version of Vinayyyy has something to say 🙂</p>
      <div className="wish-wall-grid">
        {wishes.map((w, i) => (
          <div key={i} className="wish-wall-card glass-card" style={{ borderLeft: `4px solid ${w.color}` }}>
            <div className="wish-wall-from" style={{ color: w.color }}>{w.from}</div>
            <p>{w.msg}</p>
            <button
              className={`wish-heart-btn ${likes[i] ? 'liked' : ''}`}
              onClick={(e) => { e.stopPropagation(); toggleLike(i); }}
            >
              {likes[i] ? '💖' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
