'use client';

import { useEffect, useState } from 'react';
import { team } from '@/lib/team';
import Media from '@/components/Media';

const manojProfile = {
  intro:
    'Founder & CEO of Seagrace, software engineer, AI builder and product architect focused on turning ambitious ideas into real, shipped systems.',
  philosophy:
    'I believe the best way to grow as an engineer is by building. Over the years, I have worked across various domains, technologies and industries - not because I wanted to know a little about everything, but because I wanted to understand how real-world products are built. This journey helped me discover my passion for backend development, AI systems and cloud technologies, which are the areas I continue to focus on today.',
  why:
    'I started Seagrace because I wanted to create a place where real products, practical engineering and early-career learning meet. The goal is to build meaningful technology while giving builders the kind of real-world experience that changes careers.',
  vision:
    'My vision is to grow Seagrace into a global technology company that builds impactful products, advances AI-driven innovation, and opens opportunities for the next generation of builders and problem solvers.',
  highlights: [
    'M.Sc. student at SRH University Heidelberg, March 2024 - March 2026.',
    'Built Explorix originally as a thesis project, owning the idea, plan, architecture, design, backend, AI fine-tuning, RAG and cloud work.',
    'Internship experience at DeepInsightsX in Germany for 6 months, September 2024 - February 2025.',
    'Student Assistant at SRH from October 2025 - March 2026, building a university projects platform.',
    'Freelance Guest Lecturer at SRH from April 15, 2026 - May 15, 2026, teaching software development and databases.',
    'Software Engineer volunteer with TUM XR from May 1, 2026 - October 30, 2026, working around AR/VR.',
    'Part of AI Nexus Hub, building software for smart glasses.',
  ],
};

export default function Team() {
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (!profileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProfileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [profileOpen]);

  return (
    <section className="section" id="team" data-screen-label="Team">
      <div className="wrap">
        <div className="sec-head">
          <div className="sh-left">
            <div className="eyebrow" data-reveal>06 - The people</div>
            <h2 className="h-sec" data-reveal data-delay="1" style={{ marginTop: 22 }}>The builders<br />behind Seagrace.</h2>
          </div>
          <p className="lead" data-reveal data-delay="2" style={{ maxWidth: 340 }}>A tight crew of designers and engineers who own what they ship.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => {
            const isManoj = m.name === 'Manoj Padmanabha';
            const content = (
              <>
                <div className="member__ph">
                  <span className="member__no">/ {String(i + 1).padStart(2, '0')}</span>
                  <Media src={m.photo} label={m.name} alt={m.name} />
                </div>
                <div>
                  <h4>{m.name}</h4>
                  <div className="rl">{m.role}</div>
                </div>
                <p className="bio">{m.bio}</p>
                {isManoj && <span className="member__hint">View profile</span>}
              </>
            );

            if (isManoj) {
              return (
                <button
                  className="member member--button"
                  data-reveal
                  data-delay={String(i % 4)}
                  key={m.name}
                  type="button"
                  onClick={() => setProfileOpen(true)}
                >
                  {content}
                </button>
              );
            }

            return (
              <div className="member" data-reveal data-delay={String(i % 4)} key={m.name}>
                {content}
              </div>
            );
          })}
          <a className="member" href="/contact/" data-reveal data-delay="2" style={{ justifyContent: 'center' }}>
            <div className="member__ph" style={{ display: 'grid', placeItems: 'center', borderStyle: 'dashed' }}>
              <div style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ fontFamily: 'var(--disp)', fontWeight: 800, fontSize: 40, lineHeight: 1 }}>+</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', color: 'var(--fg-mute)', marginTop: 8 }}>JOIN US</div>
              </div>
            </div>
            <div>
              <h4>You?</h4>
              <div className="rl">We&apos;re hiring builders</div>
            </div>
            <p className="bio">Think you&apos;d fit? The door&apos;s open - say hello.</p>
          </a>
        </div>
      </div>

      {profileOpen && (
        <div className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="manoj-profile-title" onClick={() => setProfileOpen(false)}>
          <div className="profile-modal__card" onClick={(e) => e.stopPropagation()}>
            <button className="profile-modal__close" type="button" aria-label="Close profile" onClick={() => setProfileOpen(false)}>x</button>
            <div className="profile-modal__grid">
              <div className="profile-modal__photo">
                <Media src="/images/team/Manoj.png" label="Manoj Padmanabha" alt="Manoj Padmanabha" />
              </div>
              <div className="profile-modal__body">
                <div className="eyebrow">Founder profile</div>
                <h3 id="manoj-profile-title">Manoj Padmanabha</h3>
                <p className="lead">{manojProfile.intro}</p>

                <div className="profile-modal__section">
                  <h4>Engineering philosophy</h4>
                  <p>{manojProfile.philosophy}</p>
                </div>
                <div className="profile-modal__section">
                  <h4>Why I started Seagrace</h4>
                  <p>{manojProfile.why}</p>
                </div>
                <div className="profile-modal__section">
                  <h4>Vision</h4>
                  <p>{manojProfile.vision}</p>
                </div>
                <div className="profile-modal__section">
                  <h4>Experience</h4>
                  <ul>
                    {manojProfile.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
