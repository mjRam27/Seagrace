export default function Culture() {
  return (
    <section className="section" id="culture" data-screen-label="Culture">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>03 - How I work</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Craft and<br />ownership.</h2>
          </div>
        </div>
        <div className="culture-grid">
          <div className="cul-card feature big" data-reveal>
            <div className="k">The principle I build by</div>
            <h3>Learn deeply. Build it. Own the outcome.</h3>
            <p>I take projects from idea to production myself, so I own every decision: the architecture, the code, the tests and how it runs in production.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="1">
            <div className="k">Craft</div>
            <h3>Details matter</h3>
            <p>Architecture, latency, naming, testing and accessibility all shape software that lasts.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="1">
            <div className="k">Practice</div>
            <h3>Build in cycles</h3>
            <p>Small milestones, working demos, feedback and iteration. Ship early, then improve.</p>
          </div>
          <div className="cul-card" data-reveal data-delay="2">
            <div className="k">Curiosity</div>
            <h3>Always learning</h3>
            <p>New stacks and new problem domains, from geospatial search to live streaming to AI agents.</p>
          </div>
          <div className="cul-card big" data-reveal data-delay="2">
            <div className="k">Production</div>
            <h3>Software is only finished when it is running for real users.</h3>
            <p>Deployment, monitoring, security and reliability are part of the build, not an afterthought. Explorix is live today because of it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
