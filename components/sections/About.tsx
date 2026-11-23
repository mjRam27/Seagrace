export default function About() {
  return (
    <section className="section manifesto" id="about" data-screen-label="About">
      <div className="wrap">
        <div className="eyebrow" data-reveal>01 - About me</div>
        <h2 data-reveal data-delay="1" style={{ marginTop: 24 }}>
          I build software end to end.{' '}
          <span className="dim">Backend, AI and cloud are where I go deepest.</span>
        </h2>
        <div className="about-grid">
          <p className="lead" data-reveal>
            I spent three years as a software engineer at Cricbuzz, building and maintaining high-scale backend systems for one of the world&apos;s leading cricket platforms. That is where I learned performance, reliability, APIs and production engineering.
            <br /><br />
            Since then I have completed an M.Sc. at SRH University Heidelberg and kept building: an AI travel app that is now live, a buddy-based learning platform, a realtime sports platform, and AI products for trading and careers. I design them, write them and ship them myself.
          </p>
          <div className="about-meta" data-reveal data-delay="1">
            <div className="row"><h4>Focus</h4><p>Backend systems, AI-powered applications and cloud platforms.</p></div>
            <div className="row"><h4>Live now</h4><p><a href="https://explorix.app" target="_blank" rel="noopener noreferrer">Explorix</a>, an AI travel app with a RAG-grounded assistant.</p></div>
            <div className="row"><h4>Based in</h4><p>Germany. Open to new opportunities and collaborations.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
