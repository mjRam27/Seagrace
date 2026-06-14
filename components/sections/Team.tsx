import { team } from '@/lib/team';
import Media from '@/components/Media';

export default function Team() {
  return (
    <section className="section" id="team" data-screen-label="Team">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>06 — The people</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>The builders<br />behind Seagrace.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 340 }}>A tight crew of designers and engineers who own what they ship.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className="member" data-reveal data-delay={String(i % 4)} key={m.name}>
              <div className="member__ph">
                <span className="member__no">/ {String(i + 1).padStart(2, '0')}</span>
                <Media src={m.photo} label={m.name} alt={m.name} />
              </div>
              <div>
                <h4>{m.name}</h4>
                <div className="rl">{m.role}</div>
              </div>
              <p className="bio">{m.bio}</p>
            </div>
          ))}
          <a className="member" href="/contact/" data-reveal data-delay="2" style={{ justifyContent: 'center' }}>
            <div className="member__ph" style={{ display: 'grid', placeItems: 'center', borderStyle: 'dashed' }}>
              <div style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ fontFamily: 'var(--disp)', fontWeight: 800, fontSize: 40, lineHeight: 1 }}>+</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', color: 'var(--fg-mute)', marginTop: 8 }}>JOIN US</div>
              </div>
            </div>
            <div>
              <h4>You?</h4>
              <div className="rl">We&apos;re hiring builders</div>
            </div>
            <p className="bio">Think you&apos;d fit? The door&apos;s open — say hello.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
