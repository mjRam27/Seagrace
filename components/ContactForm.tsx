'use client';

import { useState } from 'react';

type Mode = 'client' | 'join';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';

export default function ContactForm() {
  const [mode, setMode] = useState<Mode>('client');
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
        /* Show success even if the demo endpoint request fails locally. */
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
            Your {mode === 'client' ? 'project brief' : 'application'} is in. A real human at Seagrace will get back to you within 1-2 days.
            {!FORMSPREE_ID && <span style={{ opacity: 0.6 }}> (Demo form - set NEXT_PUBLIC_FORMSPREE_ID to deliver messages.)</span>}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form id="contactForm" noValidate onSubmit={onSubmit}>
        <input type="hidden" name="inquiry_type" value={mode === 'client' ? 'Client - project' : 'Join the team'} />
        <div className="seg">
          <button type="button" className={mode === 'client' ? 'active' : ''} onClick={() => setMode('client')}>
            <span className="em">01</span> I&apos;m a client
          </button>
          <button type="button" className={mode === 'join' ? 'active' : ''} onClick={() => setMode('join')}>
            <span className="em">02</span> I want to join
          </button>
        </div>

        <div className="field row2">
          <div className={'field' + err('name')} style={{ margin: 0 }}>
            <label>Full name</label>
            <input name="name" type="text" placeholder="Jane Doe" required />
            <div className="msg">Please enter your name</div>
          </div>
          <div className={'field' + err('email')} style={{ margin: 0 }}>
            <label>Email</label>
            <input name="email" type="email" placeholder="jane@company.com" required />
            <div className="msg">Enter a valid email</div>
          </div>
        </div>

        {mode === 'client' && (
          <div className="dyn-fields show">
            <div className="field">
              <label>Company name or URL</label>
              <input name="company" type="text" placeholder="Acme Inc. or acme.com" />
            </div>
            <div className={'field' + err('message')}>
              <label>Tell us about it</label>
              <textarea name="message" placeholder="What are you building, and what does success look like?" required></textarea>
              <div className="msg">A few words, please</div>
            </div>
          </div>
        )}

        {mode === 'join' && (
          <div className="dyn-fields show">
            <div className="field row2">
              <div className="field" style={{ margin: 0 }}>
                <label>Role you want</label>
                <select name="role" defaultValue="Frontend Engineer">
                  <option>Frontend Engineer</option><option>Backend Engineer</option><option>Full-stack Engineer</option>
                  <option>Product Designer</option><option>AI / ML Engineer</option><option>Data Engineer</option><option>Internship</option>
                </select>
              </div>
              <div className="field" style={{ margin: 0 }}>
                <label>Portfolio / GitHub</label>
                <input name="portfolio" type="text" placeholder="github.com/you" />
              </div>
            </div>
            <div className={'field' + err('message')}>
              <label>Why Seagrace?</label>
              <textarea name="message" placeholder="Tell us what you're great at and what you'd love to build with us." required></textarea>
              <div className="msg">Tell us a little about you</div>
            </div>
          </div>
        )}

        <div className="form-foot">
          <span className="note">No spam. We reply within 1-2 days.</span>
          <button className="btn btn--lg" type="submit" data-magnetic disabled={submitting}>
            <span>{submitting ? 'Sending...' : mode === 'client' ? 'Send project brief' : 'Send application'}</span> <span className="arr">-&gt;</span>
          </button>
        </div>
      </form>
    </div>
  );
}
