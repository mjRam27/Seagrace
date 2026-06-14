import Link from 'next/link';

/** `solid` starts the nav in its scrolled (frosted) state, used on inner pages. */
export default function Nav({ solid = false }: { solid?: boolean }) {
  return (
    <>
      <nav className={'nav' + (solid ? ' scrolled' : '')}>
        <Link className="brand" href="/">
          <span className="mark">S</span> Seagrace
        </Link>
        <div className="nav-links">
          <a href="/#services">Services</a>
          <a href="/#work">Work</a>
          <a href="/about/">About Us</a>
          <a href="/join/">Join</a>
          <a href="/contact/">Contact</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn--sm" href="/contact/" data-magnetic>
            Start a project <span className="arr">-&gt;</span>
          </a>
          <button className="nav-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu">
        <a href="/#services">Services <small>01</small></a>
        <a href="/#work">Work <small>02</small></a>
        <a href="/about/">About Us <small>03</small></a>
        <a href="/join/">Join <small>04</small></a>
        <a href="/contact/">Contact <small>05</small></a>
      </div>
    </>
  );
}
