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
    'Learn about Seagrace, our vision, mission, founder and the builders behind the studio.',
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
            We are building a technology company where client products, AI innovation and builder development grow together.
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
                To become a global technology company that creates impactful products, advances innovation through artificial intelligence, and unlocks opportunities for the next generation of builders and problem solvers.
              </p>
            </article>
            <article className="vision-card feature" data-reveal data-delay="1">
              <div className="eyebrow">Mission</div>
              <h2>What we execute every day.</h2>
              <p>
                To transform bold ideas into scalable digital products, deliver exceptional technology solutions for our clients, and cultivate engineering talent through real-world execution, mentorship, and continuous learning.
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
