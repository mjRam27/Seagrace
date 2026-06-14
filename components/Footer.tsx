import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <span className="mark">S</span> Seagrace
            </div>
            <div className="big">
              You imagine it.
              <br />
              We build it.
            </div>
            <a className="btn btn--sm" href="/contact/" data-magnetic>
              Start a project <span className="arr">-&gt;</span>
            </a>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><a href="/about/">About Us</a></li>
              <li><a href="/about/#culture">Culture</a></li>
              <li><a href="/about/#team">Team</a></li>
              <li><a href="/join/">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Work</h4>
            <ul>
              <li><Link href="/work/explorix/">Explorix</Link></li>
              <li><Link href="/work/pickelton/">Pickelton</Link></li>
              <li><a href="/#work">All projects</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">Web apps</a></li>
              <li><a href="/#services">Mobile</a></li>
              <li><a href="/#services">AI &amp; ML</a></li>
              <li><a href="/#services">Realtime</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Seagrace - Turn ideas into opportunities</span>
          <span>Designed &amp; built in-house</span>
        </div>
      </div>
    </footer>
  );
}
