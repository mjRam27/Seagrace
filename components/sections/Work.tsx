import Link from 'next/link';
import { projects } from '@/lib/projects';
import Media from '@/components/Media';

export default function Work() {
  return (
    <section className="section" id="work" data-screen-label="Engineering Projects">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>04 - Collaborative work</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Engineering<br />projects.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 360 }}>Internal engineering projects where contributors gain practical experience by building production-style software using modern technologies.</p>
        </div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Link key={p.slug} className="proj" href={`/work/${p.slug}/`} data-reveal data-delay={i % 2 === 1 ? '1' : undefined} data-screen-label={`Card ${p.name}`}>
              <div className="proj__media">
                <span className="chip proj__live"><span className={p.status === 'Upcoming' ? 'dot' : 'dot live'}></span> {p.status || 'Active'}</span>
                <Media src={p.cardImage} label={`${p.name} screenshot`} />
              </div>
              <div className="proj__body">
                <div className="top">
                  <h3>{p.name}</h3>
                  <span className="cat">{p.category}</span>
                </div>
                <p>{p.cardBlurb}</p>
                <div className="proj__stack">
                  {p.cardStack.map((s) => <span key={s}>{s}</span>)}
                </div>
                <div className="proj__foot">
                  <span className="open">Read project study <span className="arr">-&gt;</span></span>
                </div>
              </div>
            </Link>
          ))}

          <div className="proj placeholder" data-reveal data-screen-label="Card Placeholder 3">
            <div className="pl-in">
              <span className="chip"><span className="dot"></span> In progress</span>
              <h3>Future Community Projects</h3>
              <p>New collaborative engineering projects will be added as our community grows.</p>
              <a className="btn btn--ghost btn--sm" href="#contact">Join the initiative -&gt;</a>
            </div>
          </div>
          <div className="proj placeholder" data-reveal data-delay="1" data-screen-label="Card Placeholder 4">
            <div className="pl-in">
              <span className="chip"><span className="dot"></span> Coming soon</span>
              <h3>More learning paths</h3>
              <p>New project studies will appear here as contributors explore more engineering domains together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
