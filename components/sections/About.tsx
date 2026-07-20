export default function About() {
  return (
    <section className="section manifesto" id="about" data-screen-label="About">
      <div className="wrap">
        <div className="eyebrow" data-reveal>01 - Who we are</div>
        <h2 data-reveal data-delay="1" style={{ marginTop: 24 }}>
          Seagrace is a community-driven software engineering initiative.{' '}
          <span className="dim">We bridge the gap between academic learning and real-world software engineering.</span>
        </h2>
        <div className="about-grid">
          <p className="lead" data-reveal>
            Seagrace gives aspiring developers opportunities to collaborate on practical engineering projects, learn modern development practices, receive mentorship, and experience professional software engineering workflows.
            <br /><br />
            Contributors build production-style systems, discuss architecture, practice teamwork, and grow through shared ownership, code review, and continuous learning.
          </p>
          <div className="about-meta" data-reveal data-delay="1">
            <div className="row"><h4>Our motto</h4><p>Learn. Build. Grow Together.</p></div>
            <div className="row"><h4>Mission</h4><p>Bridge education and industry through real-world software engineering experience.</p></div>
            <div className="row"><h4>How we work</h4><p>Collaborative projects, mentorship, knowledge sharing, and practical engineering ownership.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
