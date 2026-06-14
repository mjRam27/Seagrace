import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Strip from '@/components/sections/Strip';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Culture from '@/components/sections/Culture';
import Work from '@/components/sections/Work';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Strip />
      <About />
      <Stats />
      <Services />
      <Culture />
      <Work />
      <Testimonials />
      <Footer />
    </>
  );
}
