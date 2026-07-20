import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import About from '@/components/sections/About';
import Culture from '@/components/sections/Culture';
import Ceo from '@/components/sections/Ceo';
import Team from '@/components/sections/Team';

export const metadata: Metadata = {
  title: 'About Us - Seagrace',
  description:
    'Learn about Seagrace, our mission, vision, technical leadership, and the contributors behind the software engineering initiative.',
};

export default function AboutPage() {
  return (
    <>
      <Nav solid />
      <header className="page-hero" data-screen-label="About Us Hero">
        <div className="wrap">
          <div className="eyebrow" data-reveal>About Us</div>
          <h1 data-reveal data-delay="1">The people and purpose behind Seagrace.</h1>
          <p className="lead" data-reveal data-delay="2">
            We are building an engineering initiative where practical learning, collaborative software development, mentorship, and knowledge sharing grow together.
          </p>
        </div>
      </header>
      <About />
      <section className="section section--tight" id="vision" data-screen-label="Vision Mission">
        <div className="wrap">
          <div className="vision-grid">
            <article className="vision-card" data-reveal>
              <div className="eyebrow">Vision</div>
              <h2>Where we are going.</h2>
              <p>
                To become a globally recognized software engineering community that empowers aspiring developers through practical experience, collaboration, and continuous learning.
              </p>
            </article>
            <article className="vision-card feature" data-reveal data-delay="1">
              <div className="eyebrow">Mission</div>
              <h2>What we practice every day.</h2>
              <p>
                Bridge the gap between education and industry by providing real-world software engineering experience through collaborative projects, mentorship, and modern engineering practices.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Culture />
      <Ceo />
      <Team />
      <Footer />
    </>
  );
}
