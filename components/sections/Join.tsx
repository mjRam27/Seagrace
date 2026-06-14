export default function Join() {
  return (
    <section className="section join" id="join" data-screen-label="Build & Learn">
      <div className="wrap">
        <div className="join-head">
          <div className="eyebrow center" data-reveal>07 - Build with us</div>
          <h2 className="h-sec" data-reveal data-delay="1">Learn while<br />you build.</h2>
          <p className="lead" data-reveal data-delay="2">
            Seagrace is a learning platform for people trying to start their career in software and IT. This is your hub to gain valuable experience from real-world projects, learn from mentors and senior developers, explore the tech industry, and bring your unique ideas to life with industry standards.
          </p>
          <p className="lead" data-reveal data-delay="3">
            We pay you with knowledge, and you gain experience. Join as a contributor, work shoulder-to-shoulder with our team on real products, and level up your craft on things that actually ship.
          </p>
        </div>
        <div className="join-grid">
          <article className="join-card" data-reveal>
            <div className="jc-no">01</div>
            <h3>Work on real products</h3>
            <p>Contribute to live platforms like Explorix and Pickelton - not throwaway exercises. Your work goes into things people actually use.</p>
          </article>
          <article className="join-card" data-reveal data-delay="1">
            <div className="jc-no">02</div>
            <h3>Mentorship, built in</h3>
            <p>Pair with our engineers, get your code reviewed, and learn how production software is really designed, built and shipped.</p>
          </article>
          <article className="join-card" data-reveal data-delay="2">
            <div className="jc-no">03</div>
            <h3>A modern stack</h3>
            <p>Get hands-on with React, Next.js, FastAPI, Spring Boot, PostgreSQL, Redis and applied AI - the tools teams hire for.</p>
          </article>
          <article className="join-card" data-reveal>
            <div className="jc-no">04</div>
            <h3>Flexible &amp; remote</h3>
            <p>Contribute around your studies or schedule. We&apos;re async-friendly and care about what you build, not when you&apos;re online.</p>
          </article>
          <article className="join-card" data-reveal data-delay="1">
            <div className="jc-no">05</div>
            <h3>A portfolio that proves it</h3>
            <p>Walk away with real, shipped work you can point to - plus the experience of collaborating on a true product team.</p>
          </article>
          <article className="join-card feature" data-reveal data-delay="2">
            <div className="jc-no">06</div>
            <h3>Grow with the studio</h3>
            <p>Builders who show up and care don&apos;t go unnoticed. Strong contributors grow into bigger roles and responsibilities over time.</p>
            <a className="btn btn--sm" href="/contact/" data-magnetic>Apply to join <span className="arr">-&gt;</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}
