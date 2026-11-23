import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import About from '@/components/sections/About';
import Profile from '@/components/sections/Profile';
import Culture from '@/components/sections/Culture';

export const metadata: Metadata = {
  title: 'About - Manoj Padmanabha',
  description:
    'About Manoj Padmanabha: software engineer focused on backend systems, AI-powered applications and cloud platforms. Experience, philosophy and how I work.',
};

export default function AboutPage() {
  return (
    <>
      <Nav solid />
      <header className="page-hero" data-screen-label="About Hero">
        <div className="wrap">
          <div className="eyebrow" data-reveal>About</div>
          <h1 data-reveal data-delay="1">The engineer behind the projects.</h1>
          <p className="lead" data-reveal data-delay="2">
            I design, build and ship software end to end, with a focus on backend systems, applied AI and the cloud.
          </p>
        </div>
      </header>
      <About />
      <Profile />
      <Culture />
      <Footer />
    </>
  );
}
