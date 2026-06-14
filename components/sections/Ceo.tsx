import Media from '@/components/Media';

export default function Ceo() {
  return (
    <section className="section" id="ceo" data-screen-label="CEO">
      <div className="wrap">
        <div className="ceo">
          <div className="ceo__photo" data-reveal>
            <span className="chip ceo__badge">Founder &amp; CEO</span>
            <Media src="/images/team/Manoj.png" label="Photo of Manoj" alt="Manoj Padmanabha" />
          </div>
          <div data-reveal data-delay="1">
            <div className="eyebrow" style={{ marginBottom: 24 }}>05 — From the founder</div>
            <blockquote className="ceo__quote">
              &quot;We started Seagrace on one belief — <span className="dim">that the best products come from small teams who actually care. Give people ownership and a reason to obsess, and they&apos;ll build things that outlast the hype.&quot;</span>
            </blockquote>
            <div className="ceo__by">
              <div>
                <div className="nm">Manoj Padmanabha</div>
                <div className="rl">Founder &amp; Chief Executive Officer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
