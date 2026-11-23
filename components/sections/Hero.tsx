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
        <div className="hero__chip chip"><span className="dot live"></span> Software Engineer · Backend, AI &amp; Cloud</div>
        <h1>
          <span className="line">
            <span className="word" style={{ animationDelay: '.12s' }}>Hi,</span>{' '}
            <span className="word" style={{ animationDelay: '.2s' }}>I&apos;m</span>{' '}
            <span className="word" style={{ animationDelay: '.28s' }}>Manoj.</span>
          </span>
          <span className="line muted">
            <span className="word" style={{ animationDelay: '.42s' }}>I</span>{' '}
            <span className="word" style={{ animationDelay: '.5s' }}>build</span>{' '}
            <span className="word" style={{ animationDelay: '.58s' }}>&amp;</span>{' '}
            <span className="word" style={{ animationDelay: '.66s' }}>ship.</span>
          </span>
        </h1>
        <p className="hero__sub lead">
          I&apos;m a software engineer who designs and builds backend systems, AI-powered applications and full-stack platforms, from the first architecture sketch to production. Every project on this site is built by me.
        </p>
        <div className="hero__cta">
          <a className="btn btn--lg" href="#work" data-magnetic>View my projects <span className="arr">-&gt;</span></a>
          <a className="btn btn--ghost btn--lg" href="/contact/">Get in touch</a>
        </div>
      </div>
      <a className="hero__scroll" href="#about">Scroll<span className="line"></span></a>
    </header>
  );
}
