const quotes = [
  { stars: '★★★★★', text: "They didn't just take orders — they pushed back, improved the idea, and shipped faster than teams twice their size. Felt like founders, not vendors.", av: 'RK', nm: 'Rohan K.', rl: 'Founder, early-stage startup' },
  { stars: '★★★★★', text: 'The realtime scoring system just worked, under load, on day one. Rare to find a team that sweats the infrastructure and the interface equally.', av: 'SP', nm: 'Sneha P.', rl: 'Product Lead, sports platform' },
  { stars: '★★★★★', text: "Clear communication, real ownership, and genuinely beautiful work. Seagrace turned a rough concept into something we're proud to show off.", av: 'AM', nm: 'Aditya M.', rl: 'Operations, travel venture' },
];

export default function Testimonials() {
  return (
    <section className="section tst" id="testimonials" data-screen-label="Testimonials">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>08 — Kind words</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22, color: 'var(--ink)' }}>Trusted by the<br />people we build with.</h2>
          </div>
        </div>
        <div className="tst-grid">
          {quotes.map((q, i) => (
            <figure className="quote" data-reveal data-delay={String(i)} key={q.nm}>
              <div className="stars">{q.stars}</div>
              <p>&quot;{q.text}&quot;</p>
              <figcaption className="who">
                <span className="av">{q.av}</span>
                <div>
                  <div className="nm">{q.nm}</div>
                  <div className="rl">{q.rl}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
