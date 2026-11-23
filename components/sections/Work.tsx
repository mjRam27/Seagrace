import Link from 'next/link';
import { projects } from '@/lib/projects';
import Media from '@/components/Media';

export default function Work() {
  return (
    <section className="section" id="work" data-screen-label="Projects">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>04 - My work</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Projects I&apos;ve<br />built.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 360 }}>Products I have designed, built and shipped myself, from mobile apps and realtime platforms to AI systems.</p>
        </div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Link key={p.slug} className="proj" href={`/work/${p.slug}/`} data-reveal data-delay={i % 2 === 1 ? '1' : undefined} data-screen-label={`Card ${p.name}`}>
              <div className="proj__media">
                <span className="chip proj__live"><span className={p.status === 'Live' ? 'dot live' : 'dot'}></span> {p.status}</span>
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
                  <span className="open">View project <span className="arr">-&gt;</span></span>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
