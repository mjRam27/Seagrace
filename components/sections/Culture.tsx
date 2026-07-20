export default function Culture() {
  return (
    <section className="section" id="culture" data-screen-label="Culture">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>03 - How we work</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>A culture of craft<br />and ownership.</h2>
          </div>
        </div>
        <div className="culture-grid">
          <div className="cul-card feature big" data-reveal>
            <div className="k">The principle we live by</div>
            <h3>Learn deeply. Build together. Own the outcome.</h3>
            <p>We keep collaboration practical. Contributors learn by working on real engineering problems, sharing context, and taking responsibility for the quality of what they build.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="1">
            <div className="k">Craft</div>
            <h3>Details matter</h3>
            <p>Architecture, latency, naming, testing, accessibility, and review culture all shape strong engineering habits.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="1">
            <div className="k">Practice</div>
            <h3>Build in cycles</h3>
            <p>Small milestones, frequent demos, feedback, and iteration help contributors understand how real software evolves.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="2">
            <div className="k">Curiosity</div>
            <h3>Always learning</h3>
            <p>New stacks, new ideas, and technical discussions keep the community growing with purpose.</p>
          </div>
          <div className="cul-card big" data-reveal data-delay="2">
            <div className="k">Collaboration</div>
            <h3>Our community grows together through shared learning, ownership, and collaboration.</h3>
            <p>Mentorship, code review, architecture conversations, and knowledge sharing turn each project into practical engineering experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
