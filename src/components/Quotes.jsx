/* ===== Memory Quotes Section ===== */
const quotes = [
  'Some people arrive slowly and become important suddenly.',
  'You became my favorite notification.',
  'Love started quietly and stayed beautifully.',
  'The best feelings are usually simple.',
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
