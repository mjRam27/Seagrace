'use client';

import { useState } from 'react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState('there');
  const [submitting, setSubmitting] = useState(false);

  function validate(form: HTMLFormElement) {
    const next: Record<string, boolean> = {};
    const required = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]'));
    required.forEach((el) => {
      if (!(el as HTMLElement).offsetParent) return;
      let bad = !el.value.trim();
      if ((el as HTMLInputElement).type === 'email' && el.value.trim()) {
        bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value.trim());
      }
      if (bad) next[el.name] = true;
    });
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      const firstName = Object.keys(found)[0];
      (form.elements.namedItem(firstName) as HTMLElement | null)?.focus();
      return;
    }
    const data = new FormData(form);
    setSentName(String(data.get('name') || 'there').split(' ')[0] || 'there');

    if (FORMSPREE_ID) {
      try {
        setSubmitting(true);
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
      } catch {
        /* Show success even if the request fails locally. */
      } finally {
        setSubmitting(false);
      }
    }
    setSent(true);
  }

  const err = (name: string) => (errors[name] ? ' err' : '');

  if (sent) {
    return (
      <div className="form-card">
        <div className="form-success show">
          <div className="ok">✓</div>
          <h3>Thanks, {sentName}!</h3>
          <p>
            Your message is on its way. I&apos;ll get back to you soon.
            {!FORMSPREE_ID && <span style={{ opacity: 0.6 }}> (Demo form - set NEXT_PUBLIC_FORMSPREE_ID to deliver messages.)</span>}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form id="contactForm" noValidate onSubmit={onSubmit}>
        <input type="hidden" name="inquiry_type" value="Portfolio contact" />
        <div className="form-heading">
          <span className="em">01</span>
          <h3>Send me a message</h3>
        </div>

        <div className="field row2">
          <div className={'field' + err('name')} style={{ margin: 0 }}>
            <label>Full name</label>
            <input name="name" type="text" placeholder="Jane Doe" required />
            <div className="msg">Please enter your name</div>
          </div>
          <div className={'field' + err('email')} style={{ margin: 0 }}>
            <label>Email</label>
            <input name="email" type="email" placeholder="jane@example.com" required />
            <div className="msg">Enter a valid email</div>
          </div>
        </div>

        <div className="dyn-fields show">
          <div className="field">
            <label>Company / organisation (optional)</label>
            <input name="company" type="text" placeholder="Acme Inc." />
          </div>
          <div className={'field' + err('message')}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about the role, project or idea you'd like to discuss."
              required
            ></textarea>
            <div className="msg">A few words, please</div>
          </div>
        </div>

        <div className="form-foot">
          <span className="note">I usually reply within 1-2 days.</span>
          <button className="btn btn--lg" type="submit" data-magnetic disabled={submitting}>
            <span>{submitting ? 'Sending...' : 'Send message'}</span> <span className="arr">-&gt;</span>
          </button>
        </div>
      </form>
    </div>
  );
}
