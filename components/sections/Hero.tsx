export default function Hero() {
  return (
    <header className="hero" data-screen-label="Hero">
      <div className="hero__rings">
        <i style={{ width: 520, height: 520 }}></i>
        <i style={{ width: 840, height: 840 }}></i>
        <i style={{ width: 1180, height: 1180 }}></i>
      </div>
      <div className="hero__grid"></div>
      <div className="hero__spot"></div>
      <div className="hero__noise"></div>
      <div className="hero__inner">
        <div className="hero__chip chip"><span className="dot live"></span> Software Engineering Initiative · Est. 2024</div>
        <h1>
          <span className="line">
            <span className="word" style={{ animationDelay: '.12s' }}>Learn.</span>{' '}
            <span className="word" style={{ animationDelay: '.2s' }}>Build.</span>
          </span>
          <span className="line muted">
            <span className="word" style={{ animationDelay: '.42s' }}>Grow</span>{' '}
            <span className="word" style={{ animationDelay: '.5s' }}>Together.</span>
          </span>
        </h1>
        <p className="hero__sub lead">
          Seagrace is a community-driven software engineering initiative where aspiring engineers gain practical industry experience through collaborative projects, mentorship, and modern development practices.
        </p>
        <div className="hero__cta">
          <a className="btn btn--lg" href="#contact" data-magnetic>Join the Initiative <span className="arr">-&gt;</span></a>
          <a className="btn btn--ghost btn--lg" href="#work">Explore Engineering Projects</a>
        </div>
      </div>
      <a className="hero__scroll" href="#about">Scroll<span className="line"></span></a>
    </header>
  );
}
