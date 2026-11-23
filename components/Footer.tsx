import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <span className="mark">M</span> Manoj Padmanabha
            </div>
            <div className="big">
              Design. Build.
              <br />
              Ship.
            </div>
            <p>
              Software engineer building backend systems, AI-powered applications and cloud platforms, from architecture to production.
            </p>
            <a className="btn btn--sm" href="/contact/" data-magnetic>
              Get in touch <span className="arr">-&gt;</span>
            </a>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li><a href="/about/">About me</a></li>
              <li><a href="/about/#experience">Experience</a></li>
              <li><a href="/about/#culture">How I work</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Projects</h4>
            <ul>
              {projects.map((p) => (
                <li key={p.slug}><Link href={`/work/${p.slug}/`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Skills</h4>
            <ul>
              <li><a href="/#services">Backend Engineering</a></li>
              <li><a href="/#services">Frontend & Mobile</a></li>
              <li><a href="/#services">AI Engineering</a></li>
              <li><a href="/#services">Cloud &amp; DevOps</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Manoj Padmanabha</span>
          <span>Designed and built by me</span>
        </div>
      </div>
    </footer>
  );
}
