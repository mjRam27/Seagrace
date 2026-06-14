export default function Services() {
  return (
    <section className="section" id="services" data-screen-label="Services">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>02 — What we do</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Everything from idea<br />to a product that ships.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 360 }}>One team across the whole stack — design, frontend, backend, AI and realtime infrastructure.</p>
        </div>
        <div className="services">
          <article className="svc" data-reveal>
            <div className="no">/ 01</div>
            <h3>Web applications</h3>
            <p>Fast, accessible, beautifully engineered web apps and platforms — from marketing sites to complex dashboards and SaaS products.</p>
            <div className="tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Node</span></div>
          </article>
          <article className="svc" data-reveal data-delay="1">
            <div className="no">/ 02</div>
            <h3>Mobile experiences</h3>
            <p>Native-quality iOS &amp; Android apps with thoughtful interaction design and offline-first reliability.</p>
            <div className="tags"><span>iOS</span><span>Android</span><span>React Native</span></div>
          </article>
          <article className="svc" data-reveal>
            <div className="no">/ 03</div>
            <h3>AI &amp; intelligence</h3>
            <p>Recommendation engines, semantic &amp; vector search, and assistants — practical AI woven into real products, not bolted on.</p>
            <div className="tags"><span>Embeddings</span><span>Vector search</span><span>LLMs</span></div>
          </article>
          <article className="svc" data-reveal data-delay="1">
            <div className="no">/ 04</div>
            <h3>Realtime systems</h3>
            <p>Live scoring, presence, collaborative state and event pipelines built on battle-tested realtime infrastructure.</p>
            <div className="tags"><span>WebSockets</span><span>Redis</span><span>Spring Boot</span><span>FastAPI</span></div>
          </article>
        </div>
      </div>
    </section>
  );
}
