import Media from '@/components/Media';

const experience: { title: string; detail: string }[] = [
  { title: 'Software Engineer, Cricbuzz', detail: "March 2021 - February 2024. Built and maintained high-scale backend systems for one of the world's leading cricket platforms, with a focus on performance, reliability, APIs and production engineering." },
  { title: 'M.Sc., SRH University Heidelberg', detail: 'March 2024 - March 2026. Built Explorix as my thesis project, owning the idea, plan, architecture, design, backend, AI fine-tuning, RAG and cloud work.' },
  { title: 'Intern, DeepInsightsX (Germany)', detail: 'September 2024 - February 2025. Six-month internship.' },
  { title: 'Student Assistant, SRH', detail: 'October 2025 - March 2026. Built a university projects platform.' },
  { title: 'Freelance Guest Lecturer, SRH', detail: '2026. Teaching software development and databases.' },
  { title: 'Software Engineer (volunteer), TUM XR', detail: '2026 - present. Working on AR/VR software.' },
  { title: 'AI Nexus Hub', detail: 'Building software for smart glasses.' },
];

export default function Profile() {
  return (
    <>
      <section className="section" id="profile" data-screen-label="Profile">
        <div className="wrap">
          <div className="ceo">
            <div className="ceo__photo" data-reveal>
              <span className="chip ceo__badge">Software Engineer</span>
              <Media src="/images/manoj.png" label="Photo of Manoj" alt="Manoj Padmanabha" />
            </div>
            <div data-reveal data-delay="1">
              <div className="eyebrow" style={{ marginBottom: 24 }}>In my words</div>
              <blockquote className="ceo__quote">
                &quot;The best way to grow as an engineer is by building. <span className="dim">I&apos;ve worked across domains and stacks to understand how real-world software systems are built, and that led me to backend, AI and cloud.&quot;</span>
              </blockquote>
              <div className="ceo__by">
                <div>
                  <div className="nm">Manoj Padmanabha</div>
                  <div className="rl">Backend, AI &amp; Cloud Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="vision" data-screen-label="Philosophy">
        <div className="wrap">
          <div className="vision-grid">
            <article className="vision-card" data-reveal>
              <div className="eyebrow">Philosophy</div>
              <h2>Learn by building.</h2>
              <p>
                Over the years I have worked across different domains, technologies and industries, not to know a little about everything, but to understand how real software systems are built. That journey is what led me to backend development, AI systems and cloud technologies, the areas I focus on today.
              </p>
            </article>
            <article className="vision-card feature" data-reveal data-delay="1">
              <div className="eyebrow">What I&apos;m after</div>
              <h2>Products that run for real users.</h2>
              <p>
                I enjoy owning a product end to end: shaping the idea, designing the architecture, writing the code and keeping it running in production. Explorix is live today, and StudywidBuddy, Pickelton, Tradex and Ascenjo are next.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="experience" data-screen-label="Experience">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-left">
              <div className="eyebrow" data-reveal>Experience</div>
              <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>Where I&apos;ve<br />worked.</h2>
            </div>
          </div>
          <ul className="exp-list">
            {experience.map((e) => (
              <li key={e.title} data-reveal>
                <b>{e.title}</b>. {e.detail}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
