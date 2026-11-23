import Link from 'next/link';

/** `solid` starts the nav in its scrolled (frosted) state, used on inner pages. */
export default function Nav({ solid = false }: { solid?: boolean }) {
  return (
    <>
      <nav className={'nav' + (solid ? ' scrolled' : '')}>
        <Link className="brand" href="/">
          <span className="mark">M</span> Manoj Padmanabha
        </Link>
        <div className="nav-links">
          <a href="/#services">What I do</a>
          <a href="/#work">Projects</a>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn--sm" href="/contact/" data-magnetic>
            Get in touch <span className="arr">-&gt;</span>
          </a>
          <button className="nav-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu">
        <a href="/#services">What I do <small>01</small></a>
        <a href="/#work">Projects <small>02</small></a>
        <a href="/about/">About <small>03</small></a>
        <a href="/contact/">Contact <small>04</small></a>
      </div>
    </>
  );
}
