import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProject } from '@/lib/projects';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Media from '@/components/Media';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: 'Project — Seagrace' };
  return {
    title: `${p.name} — Seagrace`,
    description: p.lead,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const next = projects.find((x) => x.slug !== p.slug) || p;

  return (
    <>
      <Nav solid />

      {/* HERO */}
      <header className="proj-hero" data-screen-label={`${p.name} Hero`}>
        <div className="proj-hero__bg"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <Link className="back-link" href="/#work"><span className="a">←</span> All work</Link>
          <div className="proj-hero__top">
            <span className="chip"><span className={p.status === 'Upcoming' ? 'dot' : 'dot live'}></span> {p.status || 'Live'}</span>
            <span className="chip">{p.category}</span>
            <span className="chip">{p.year}</span>
          </div>
          <h1 data-reveal>{p.name}</h1>
          <p className="proj-hero__lead lead" data-reveal data-delay="1">{p.lead}</p>
          <div className="proj-hero__cta" data-reveal data-delay="2">
            <a className="btn btn--lg" href={p.liveUrl} target="_blank" rel="noopener" data-magnetic>
              Visit live site <span className="arr">↗</span>
            </a>
            <span className="url-pill"><span className="dot"></span> <b>{p.liveLabel}</b></span>
          </div>
        </div>
      </header>

      {/* BIG SHOT */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="proj-shot" data-reveal>
            <span className="chip tag">Product overview</span>
            <Media src={p.heroImage} label={`${p.name} hero screenshot`} />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section" data-screen-label={`${p.name} Overview`}>
        <div className="wrap">
          <div className="ov-grid">
            <aside className="ov-meta" data-reveal>
              <div className="row"><span className="k">Role</span><span className="v">{p.meta.role}</span></div>
              <div className="row"><span className="k">Category</span><span className="v">{p.category}</span></div>
              <div className="row"><span className="k">Timeline</span><span className="v">{p.year}</span></div>
              <div className="row"><span className="k">Platform</span><span className="v">{p.meta.platform}</span></div>
              <div className="row"><span className="k">Live at</span><span className="v soft">{p.liveLabel}</span></div>
            </aside>
            <div className="ov-body">
              <div className="eyebrow" style={{ marginBottom: 22 }} data-reveal>The brief</div>
              <h2 data-reveal data-delay="1">{p.briefTitle}</h2>
              {p.brief.map((para, i) => (
                <p key={i} data-reveal dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" data-screen-label={`${p.name} Features`}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-left">
              <div className="eyebrow" data-reveal>What it does</div>
              <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 20 }}>{p.featuresTitle}</h2>
            </div>
          </div>
          <div className="feat-grid">
            {p.features.map((f) => (
              <article className="feat" data-reveal key={f.n}>
                <div className="n">{f.n}</div>
                <h3>
                  {f.title}
                  {f.note && <span style={{ color: 'var(--fg-mute)', fontSize: 13 }}> · {f.note}</span>}
                </h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="section section--tight" data-screen-label={`${p.name} Stack`}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-left">
              <div className="eyebrow" data-reveal>Under the hood</div>
              <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 20 }}>Tech stack.</h2>
            </div>
          </div>
          <div className="stack-grid">
            {p.stack.map((s) => (
              <div className="stack-row" data-reveal key={s.label + s.tech}>
                <div className="badge">{s.badge}</div>
                <div className="meta"><div className="l">{s.label}</div><div className="t">{s.tech}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" data-screen-label={`${p.name} Gallery`}>
        <div className="wrap">
          <div className="sec-head"><div className="sh-left"><div className="eyebrow" data-reveal>Screens</div><h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 20 }}>A look inside.</h2></div></div>
          <div className="gallery">
            {(p.galleryImages || [
              { src: undefined, label: 'Primary view' },
              { src: undefined, label: 'Detail' },
              { src: undefined, label: 'Secondary view' },
            ]).map((image, i) => (
              <div className={i === 0 ? 'g wide' : 'g'} data-reveal data-delay={i > 1 ? '1' : undefined} key={image.label}>
                <Media src={image.src} label={image.label} alt={image.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREW */}
      <section className="section" data-screen-label={`${p.name} Team`}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-left">
              <div className="eyebrow" data-reveal>Who built it</div>
              <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 20 }}>The {p.name} crew.</h2>
            </div>
            <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 340 }}>The people behind the build — and exactly what they owned.</p>
          </div>
          <div className="pteam-grid">
            {p.crew.map((c, i) => (
              <article className="pmember" data-reveal data-delay={String(i % 3)} key={c.name}>
                <div className="pmember__ph"><Media src={c.photo} label={c.name} alt={c.name} /></div>
                <div className="pmember__b">
                  <div className="nm">{c.name}</div>
                  <div className="rl">{c.role}</div>
                  <p className="did">{c.did}</p>
                  <div className="chips">{c.chips.map((ch) => <span key={ch}>{ch}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="proj-cta" data-screen-label={`${p.name} Next`}>
        <div className="wrap">
          <Link className="next-proj" href={`/work/${next.slug}/`}>
            <div>
              <div className="lbl">Next project</div>
              <span className="nm">{next.name} <span className="arr-big">→</span></span>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
