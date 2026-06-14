export default function Stats() {
  return (
    <section className="section section--tight" data-screen-label="Stats">
      <div className="wrap">
        <div className="stats">
          <div className="stat" data-reveal><div className="num"><span data-count="6">0</span><span className="suf">+</span></div><div className="lab">Products shipped</div></div>
          <div className="stat" data-reveal data-delay="1"><div className="num"><span data-count="6">0</span></div><div className="lab">Builders in the studio</div></div>
          <div className="stat" data-reveal data-delay="2"><div className="num"><span data-count="99.9">0</span><span className="suf">%</span></div><div className="lab">Avg. uptime delivered</div></div>
          <div className="stat" data-reveal data-delay="3"><div className="num"><span data-count="100">0</span><span className="suf">%</span></div><div className="lab">Design + build in-house</div></div>
        </div>
      </div>
    </section>
  );
}
