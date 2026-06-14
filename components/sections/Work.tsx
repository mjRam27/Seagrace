import Link from 'next/link';
import { projects } from '@/lib/projects';
import Media from '@/components/Media';

export default function Work() {
  return (
    <section className="section" id="work" data-screen-label="Work">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>04 — Selected work</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Things we&apos;ve<br />designed &amp; built.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 360 }}>Open any project for the full case study — the live product, the stack, and the people who built it.</p>
        </div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Link key={p.slug} className="proj" href={`/work/${p.slug}/`} data-reveal data-delay={i % 2 === 1 ? '1' : undefined} data-screen-label={`Card ${p.name}`}>
              <div className="proj__media">
                <span className="chip proj__live"><span className="dot live"></span> Live</span>
                <Media label={`${p.name} screenshot`} />
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
                  <span className="open">Read case study <span className="arr">→</span></span>
                </div>
              </div>
            </Link>
          ))}

          <div className="proj placeholder" data-reveal data-screen-label="Card Placeholder 3">
            <div className="pl-in">
              <span className="chip"><span className="dot"></span> In progress</span>
              <h3>Your next project</h3>
              <p>This slot is reserved for the work we&apos;ll build with you. Replace it with a real case study anytime.</p>
              <a className="btn btn--ghost btn--sm" href="#contact">Start a project →</a>
            </div>
          </div>
          <div className="proj placeholder" data-reveal data-delay="1" data-screen-label="Card Placeholder 4">
            <div className="pl-in">
              <span className="chip"><span className="dot"></span> Coming soon</span>
              <h3>More on the way</h3>
              <p>We&apos;re shipping continuously. New case studies land here as they go live.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
