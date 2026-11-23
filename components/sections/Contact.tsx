import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="wrap">
        <div className="contact-grid">
          <aside className="contact-aside" data-reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Contact</div>
            <h2>Let&apos;s<br />talk.</h2>
            <p className="lead">Have a role, a project or an idea you want to discuss? Send me a message and I&apos;ll get back to you.</p>
            <div className="clist">
              <div className="row"><span className="ic">01</span><div>Open to <b>software engineering roles.</b></div></div>
              <div className="row"><span className="ic">02</span><div>Happy to talk <b>backend, AI and cloud.</b></div></div>
              <div className="row"><span className="ic">03</span><div>Questions about <b>any of my projects.</b></div></div>
              <div className="row"><span className="ic">04</span><div>Freelance and <b>collaboration ideas.</b></div></div>
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
