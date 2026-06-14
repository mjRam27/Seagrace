import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav solid />
      <section className="section" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div className="wrap">
          <div className="eyebrow center" style={{ justifyContent: 'center', marginBottom: 22 }}>404</div>
          <h1 className="h-sec" style={{ marginBottom: 22 }}>Page not found.</h1>
          <p className="lead" style={{ maxWidth: 420, margin: '0 auto 32px' }}>
            That page doesn&apos;t exist — but our work does. Head back home and take a look.
          </p>
          <Link className="btn btn--lg" href="/" data-magnetic>Back home <span className="arr">→</span></Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
