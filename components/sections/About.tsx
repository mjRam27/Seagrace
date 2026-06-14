export default function About() {
  return (
    <section className="section manifesto" id="about" data-screen-label="About">
      <div className="wrap">
        <div className="eyebrow" data-reveal>01 — Who we are</div>
        <h2 data-reveal data-delay="1" style={{ marginTop: 24 }}>
          We&apos;re a small studio with a builder&apos;s bias.{' '}
          <span className="dim">We partner with founders and teams to design, engineer, and ship custom software — products that don&apos;t just launch, but last.</span>
        </h2>
        <div className="about-grid">
          <p className="lead" data-reveal>
            Seagrace exists because great products come from small teams who genuinely care. No bloated process, no hand-offs to people who never touched the work. The people who design your product are the people who build it — and they obsess over the details users feel but rarely name.
            <br /><br />
            From a first sketch on a napkin to a system handling real traffic, we move in tight cycles, ship early, and treat your roadmap like our own.
          </p>
          <div className="about-meta" data-reveal data-delay="1">
            <div className="row"><h4>Our motto</h4><p>You imagine it. We build it.</p></div>
            <div className="row"><h4>Mission</h4><p>Turn ideas into opportunities — and opportunities into products people rely on.</p></div>
            <div className="row"><h4>How we work</h4><p>Small team, full ownership, shipped in cycles. Design and engineering, end to end.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
