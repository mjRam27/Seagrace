import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Join from '@/components/sections/Join';

export const metadata: Metadata = {
  title: 'Join - Seagrace',
  description:
    'Join Seagrace as a software engineering initiative for aspiring developers seeking practical industry experience.',
};

export default function JoinPage() {
  return (
    <>
      <Nav solid />
      <header className="page-hero" data-screen-label="Join Hero">
        <div className="wrap">
          <div className="eyebrow" data-reveal>Join Seagrace</div>
          <h1 data-reveal data-delay="1">Build practical software engineering experience.</h1>
          <p className="lead" data-reveal data-delay="2">
            Gain experience through collaborative engineering projects, mentorship, technical discussions, modern workflows, and knowledge sharing.
          </p>
        </div>
      </header>
      <Join />
      <Footer />
    </>
  );
}
