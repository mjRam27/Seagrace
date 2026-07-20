export default function Join() {
  return (
    <section className="section join" id="join" data-screen-label="Build & Learn">
      <div className="wrap">
        <div className="join-head">
          <div className="eyebrow center" data-reveal>07 - Join the initiative</div>
          <h2 className="h-sec" data-reveal data-delay="1">Learn while<br />you build.</h2>
          <p className="lead" data-reveal data-delay="2">
            Seagrace is a software engineering initiative for students, graduates, career switchers, and aspiring developers who want practical industry experience through collaborative engineering projects.
          </p>
          <p className="lead" data-reveal data-delay="3">
            Contributors learn through mentorship, code review, architecture discussions, modern workflows, and real project ownership. The goal is simple: build stronger software engineers together.
          </p>
        </div>
        <div className="join-grid">
          <article className="join-card" data-reveal>
            <div className="jc-no">01</div>
            <h3>Work on real engineering projects</h3>
            <p>Contribute to production-style platforms like Explorix and Pickelton - not throwaway exercises. Your work becomes portfolio-ready proof of practical experience.</p>
          </article>
          <article className="join-card" data-reveal data-delay="1">
            <div className="jc-no">02</div>
            <h3>Mentorship, built in</h3>
            <p>Pair with experienced engineers, get your code reviewed, and learn how software is planned, designed, built, tested, and improved.</p>
          </article>
          <article className="join-card" data-reveal data-delay="2">
            <div className="jc-no">03</div>
            <h3>A modern stack</h3>
            <p>Get hands-on with React, Next.js, FastAPI, Spring Boot, PostgreSQL, Redis, applied AI, cloud workflows, and DevOps practices.</p>
          </article>
          <article className="join-card" data-reveal>
            <div className="jc-no">04</div>
            <h3>Flexible &amp; remote</h3>
            <p>Contribute around your studies or schedule. We&apos;re async-friendly and care about clear communication, consistency, and learning progress.</p>
          </article>
          <article className="join-card" data-reveal data-delay="1">
            <div className="jc-no">05</div>
            <h3>A portfolio that proves it</h3>
            <p>Walk away with project experience you can explain clearly - architecture, tradeoffs, teamwork, testing, and the parts you owned.</p>
          </article>
          <article className="join-card feature" data-reveal data-delay="2">
            <div className="jc-no">06</div>
            <h3>Grow with the community</h3>
            <p>Contributors who show up, learn, and help others grow into bigger responsibilities, technical discussions, and leadership opportunities over time.</p>
            <a className="btn btn--sm" href="/contact/" data-magnetic>Apply to join <span className="arr">-&gt;</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}
