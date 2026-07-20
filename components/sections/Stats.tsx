export default function Stats() {
  return (
    <section className="section section--tight" data-screen-label="Stats">
      <div className="wrap">
        <div className="stats">
          <div className="stat" data-reveal><div className="num"><span data-count="6">0</span><span className="suf">+</span></div><div className="lab">Engineering projects</div></div>
          <div className="stat" data-reveal data-delay="1"><div className="num"><span data-count="6">0</span></div><div className="lab">Core contributors</div></div>
          <div className="stat" data-reveal data-delay="2"><div className="num"><span data-count="99.9">0</span><span className="suf">%</span></div><div className="lab">Reliability learning target</div></div>
          <div className="stat" data-reveal data-delay="3"><div className="num"><span data-count="100">0</span><span className="suf">%</span></div><div className="lab">Collaborative engineering</div></div>
        </div>
      </div>
    </section>
  );
}
