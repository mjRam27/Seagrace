import Media from '@/components/Media';

export default function Ceo() {
  return (
    <section className="section" id="ceo" data-screen-label="Technical Lead">
      <div className="wrap">
        <div className="ceo">
          <div className="ceo__photo" data-reveal>
            <span className="chip ceo__badge">Founder &amp; Technical Lead</span>
            <Media src="/images/team/Manoj.png" label="Photo of Manoj" alt="Manoj Padmanabha" />
          </div>
          <div data-reveal data-delay="1">
            <div className="eyebrow" style={{ marginBottom: 24 }}>05 - From the founder</div>
            <blockquote className="ceo__quote">
              &quot;We started Seagrace because too many talented developers graduate without practical engineering experience. <span className="dim">Our goal is to create a collaborative environment where aspiring engineers can build real projects, learn modern engineering practices, and grow together.&quot;</span>
            </blockquote>
            <div className="ceo__by">
              <div>
                <div className="nm">Manoj Padmanabha</div>
                <div className="rl">Founder &amp; Technical Lead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
