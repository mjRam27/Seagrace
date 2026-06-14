export default function Culture() {
  return (
    <section className="section" id="culture" data-screen-label="Culture">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>03 — How we work</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>A culture of craft<br />and ownership.</h2>
          </div>
        </div>
        <div className="culture-grid">
          <div className="cul-card feature big" data-reveal>
            <div className="k">The principle we live by</div>
            <h3>Small team. Full ownership. Shipped, not shelved.</h3>
            <p>We keep teams small on purpose. Fewer hand-offs, more accountability, and a shorter line between an idea and the thing in someone&apos;s hands.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="1">
            <div className="k">Craft</div>
            <h3>Details matter</h3>
            <p>The 1% users feel but can&apos;t name — motion, latency, copy. We sweat it.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="1">
            <div className="k">Velocity</div>
            <h3>Ship in cycles</h3>
            <p>Tight loops, early demos, real feedback. Momentum over big reveals.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="2">
            <div className="k">Curiosity</div>
            <h3>Always learning</h3>
            <p>New stacks, new ideas. We pick the right tool, not the familiar one.</p>
          </div>
          <div className="cul-card big" data-reveal data-delay="2">
            <div className="k">Partnership</div>
            <h3>Your roadmap is our roadmap</h3>
            <p>We don&apos;t disappear after launch. We measure, iterate, and stay in it with you — invested in the outcome, not just the deliverable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
