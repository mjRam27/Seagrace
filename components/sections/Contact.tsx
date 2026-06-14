import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="wrap">
        <div className="contact-grid">
          <aside className="contact-aside" data-reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>09 — Get in touch</div>
            <h2>Let&apos;s build<br />something.</h2>
            <p className="lead">Whether you&apos;ve got a product to ship or you want to build with us — start here. Real humans read every message.</p>
            <div className="clist">
              <div className="row"><span className="ic">✦</span><div>Have an idea? <b>Start a project</b> and we&apos;ll scope it with you.</div></div>
              <div className="row"><span className="ic">◇</span><div>Want to build with us? <b>Join the team.</b></div></div>
              <div className="row"><span className="ic">◈</span><div>Prefer to chat first? <b>Ask Grace</b>, bottom-right.</div></div>
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
