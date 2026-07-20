import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact - Seagrace',
  description: 'Apply to join the Seagrace software engineering initiative.',
};

export default function ContactPage() {
  return (
    <>
      <Nav solid />
      <header className="page-hero page-hero--compact" data-screen-label="Contact Hero">
        <div className="wrap">
          <div className="eyebrow" data-reveal>Contact</div>
          <h1 data-reveal data-delay="1">Join the Seagrace engineering initiative.</h1>
        </div>
      </header>
      <Contact />
      <Footer />
    </>
  );
}
