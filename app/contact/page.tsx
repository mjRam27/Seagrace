import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact - Seagrace',
  description: 'Start a project or apply to join Seagrace.',
};

export default function ContactPage() {
  return (
    <>
      <Nav solid />
      <header className="page-hero page-hero--compact" data-screen-label="Contact Hero">
        <div className="wrap">
          <div className="eyebrow" data-reveal>Contact</div>
          <h1 data-reveal data-delay="1">Let us know what you want to build.</h1>
        </div>
      </header>
      <Contact />
      <Footer />
    </>
  );
}
