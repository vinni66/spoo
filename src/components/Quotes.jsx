/* ===== Memory Quotes Section ===== */
const quotes = [
  'Ninna nodidmele normal days kooda special ansutte 💖',
  'Ninna message bandre mood automatic better aagutte 🙂',
  'Slow aagi bandu, tumba important aagbitte ninu ✨',
  'Ninna jothe iruvudu peaceful feeling 🤍',
  'Ninna smile ge addicted aagbitini anisutte 😭💛',
  'Love andre enu anta gothiralilla… ninna nodida mele gothaaythu 💕',
  'Ninna hesaru nodidre kooda smile barutte 🫶',
  'You became my favorite habit 🌸',
];

export default function Quotes() {
  return (
    <section id="quotes">
      <h2 className="section-title">Feelings in Words ✨</h2>
      <div className="quotes-grid">
        {quotes.map((q, i) => (
          <div key={i} className="quote-card glass-card">
            <p>"{q}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
