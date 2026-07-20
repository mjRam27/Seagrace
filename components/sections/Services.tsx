export default function Services() {
  return (
    <section className="section" id="services" data-screen-label="Engineering Domains">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>02 - What we do</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Engineering<br />learning tracks.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 360 }}>Practical domains where contributors learn by building, reviewing, and improving production-style software together.</p>
        </div>
        <div className="services">
          <article className="svc" data-reveal>
            <div className="no">/ 01</div>
            <h3>Backend Engineering</h3>
            <p>APIs, authentication, data modeling, service design, and reliable server-side systems built with modern engineering practices.</p>
            <div className="tags"><span>Node</span><span>FastAPI</span><span>Spring Boot</span><span>Databases</span></div>
          </article>
          <article className="svc" data-reveal data-delay="1">
            <div className="no">/ 02</div>
            <h3>Frontend Engineering</h3>
            <p>Accessible interfaces, responsive UI systems, state management, performance, and polished web and mobile experiences.</p>
            <div className="tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>React Native</span></div>
          </article>
          <article className="svc" data-reveal>
            <div className="no">/ 03</div>
            <h3>AI Engineering</h3>
            <p>Applied AI, retrieval workflows, intelligent assistants, data preparation, evaluation, and responsible model integration.</p>
            <div className="tags"><span>LLMs</span><span>RAG</span><span>Embeddings</span><span>ML</span></div>
          </article>
          <article className="svc" data-reveal data-delay="1">
            <div className="no">/ 04</div>
            <h3>Cloud, DevOps &amp; Architecture</h3>
            <p>Cloud deployment, CI/CD, observability, realtime systems, system design, and architecture discussions grounded in real projects.</p>
            <div className="tags"><span>Cloud</span><span>Redis</span><span>WebSockets</span><span>CI/CD</span></div>
          </article>
        </div>
      </div>
    </section>
  );
}
