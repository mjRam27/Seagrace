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
        <div className="hero__chip chip"><span className="dot live"></span> Custom software studio · Est. 2024</div>
        <h1>
          <span className="line">
            <span className="word" style={{ animationDelay: '.12s' }}>You</span>{' '}
            <span className="word" style={{ animationDelay: '.2s' }}>imagine</span>{' '}
            <span className="word" style={{ animationDelay: '.28s' }}>it.</span>
          </span>
          <span className="line muted">
            <span className="word" style={{ animationDelay: '.42s' }}>We</span>{' '}
            <span className="word" style={{ animationDelay: '.5s' }}>build</span>{' '}
            <span className="word" style={{ animationDelay: '.58s' }}>it.</span>
          </span>
        </h1>
        <p className="hero__sub lead">
          Seagrace designs and engineers web &amp; mobile products that turn bold ideas into shipped, scalable reality. Turn ideas into opportunities.
        </p>
        <div className="hero__cta">
          <a className="btn btn--lg" href="#contact" data-magnetic>Start a project <span className="arr">→</span></a>
          <a className="btn btn--ghost btn--lg" href="#work">See our work</a>
        </div>
      </div>
      <a className="hero__scroll" href="#about">Scroll<span className="line"></span></a>
    </header>
  );
}
