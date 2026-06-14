import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Join from '@/components/sections/Join';

export const metadata: Metadata = {
  title: 'Join - Seagrace',
  description:
    'Join Seagrace as a learning platform for early-career builders seeking real-world software and IT experience.',
};

export default function JoinPage() {
  return (
    <>
      <Nav solid />
      <header className="page-hero" data-screen-label="Join Hero">
        <div className="wrap">
          <div className="eyebrow" data-reveal>Join Seagrace</div>
          <h1 data-reveal data-delay="1">Your hub to start a career in software and IT.</h1>
          <p className="lead" data-reveal data-delay="2">
            Gain valuable experience from real-world projects, learn from mentors and senior developers, explore the tech industry, and bring your unique ideas to life with industry standards.
          </p>
        </div>
      </header>
      <Join />
      <Footer />
    </>
  );
}
