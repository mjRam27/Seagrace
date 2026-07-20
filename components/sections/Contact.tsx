import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="wrap">
        <div className="contact-grid">
          <aside className="contact-aside" data-reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>09 - Join Seagrace</div>
            <h2>Join the<br />Initiative.</h2>
            <p className="lead">Become part of a community focused on practical software engineering, collaborative projects, mentorship, and continuous learning.</p>
            <div className="clist">
              <div className="row"><span className="ic">01</span><div>Collaborate on <b>real-world engineering projects.</b></div></div>
              <div className="row"><span className="ic">02</span><div>Learn <b>modern software engineering practices.</b></div></div>
              <div className="row"><span className="ic">03</span><div>Work with a team using <b>industry workflows.</b></div></div>
              <div className="row"><span className="ic">04</span><div>Grow through <b>mentorship and technical discussions.</b></div></div>
            </div>
          </aside>
          <div data-reveal data-delay="1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
