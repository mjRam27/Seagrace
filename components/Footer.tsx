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
              Learn. Build.
              <br />
              Grow Together.
            </div>
            <p>
              Seagrace is a community-driven software engineering initiative helping aspiring developers gain practical experience through collaborative engineering projects, mentorship, and modern development practices.
            </p>
            <a className="btn btn--sm" href="/contact/" data-magnetic>
              Join the Initiative <span className="arr">-&gt;</span>
            </a>
          </div>
          <div>
            <h4>Initiative</h4>
            <ul>
              <li><a href="/about/">About Us</a></li>
              <li><a href="/about/#culture">Culture</a></li>
              <li><a href="/about/#team">Team</a></li>
              <li><a href="/join/">Join</a></li>
            </ul>
          </div>
          <div>
            <h4>Projects</h4>
            <ul>
              <li><Link href="/work/explorix/">Explorix</Link></li>
              <li><Link href="/work/pickelton/">Pickelton</Link></li>
              <li><a href="/#work">All projects</a></li>
            </ul>
          </div>
          <div>
            <h4>Domains</h4>
            <ul>
              <li><a href="/#services">Backend Engineering</a></li>
              <li><a href="/#services">Frontend Engineering</a></li>
              <li><a href="/#services">AI Engineering</a></li>
              <li><a href="/#services">Cloud &amp; DevOps</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Seagrace - Software Engineering Initiative</span>
          <span>Built through collaboration and knowledge sharing</span>
        </div>
      </div>
    </footer>
  );
}
