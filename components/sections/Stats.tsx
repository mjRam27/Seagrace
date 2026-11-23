import { projects } from '@/lib/projects';

export default function Stats() {
  const live = projects.filter((p) => p.status === 'Live').length;
  return (
    <section className="section section--tight" data-screen-label="Stats">
      <div className="wrap">
        <div className="stats">
          <div className="stat" data-reveal><div className="num"><span data-count={projects.length}>0</span></div><div className="lab">Projects built</div></div>
          <div className="stat" data-reveal data-delay="1"><div className="num"><span data-count={live}>0</span></div><div className="lab">Live in production</div></div>
          <div className="stat" data-reveal data-delay="2"><div className="num"><span data-count="5">0</span><span className="suf">+</span></div><div className="lab">Years building software</div></div>
          <div className="stat" data-reveal data-delay="3"><div className="num"><span data-count="100">0</span><span className="suf">%</span></div><div className="lab">Built end to end by me</div></div>
        </div>
      </div>
    </section>
  );
}
