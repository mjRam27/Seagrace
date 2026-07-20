'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { who: 'bot' | 'user'; text: string };

const KB: { k: string[]; a: string }[] = [
  {
    k: ['what is sea grace', 'what is seagrace', 'about sea grace', 'about seagrace', 'company'],
    a: '<b>Sea Grace</b> is a community-driven software engineering initiative helping aspiring developers gain practical industry experience through collaborative engineering projects, mentorship, leadership, and modern development practices.',
  },
  {
    k: ['what does sea grace do', 'what do you do', 'services', 'offer', 'capabilities', 'build', 'make'],
    a: 'We create collaborative engineering projects and learning tracks across <b>backend engineering</b>, <b>frontend engineering</b>, <b>cloud and DevOps</b>, <b>AI engineering</b>, <b>system design</b>, databases, architecture, and professional workflows.',
  },
  {
    k: ['different', 'why choose', 'special', 'unique', 'what makes'],
    a: 'Seagrace focuses on practical learning through real engineering work. Contributors learn by building, receiving code review, discussing architecture, and working with modern tools and team workflows.',
  },
  {
    k: ['startup', 'startups', 'non technical', 'non-technical', 'founder', 'founders', 'idea'],
    a: 'Seagrace is an engineering initiative where contributors practice turning ideas into structured technical projects, architecture plans, prototypes, and learning outcomes.',
  },
  {
    k: ['industry', 'industries', 'domain', 'sectors'],
    a: 'Our projects explore domains such as AI, travel, sports technology, career technology, realtime systems, cloud architecture, databases, and applied automation as learning contexts.',
  },
  {
    k: ['vision'],
    a: 'Our vision is to become a globally recognized software engineering community that empowers aspiring developers through practical experience, collaboration, and continuous learning.',
  },
  {
    k: ['mission'],
    a: 'Our mission is to bridge the gap between education and industry by providing real-world software engineering experience through collaborative projects, mentorship, and modern engineering practices.',
  },
  {
    k: ['team', 'who are you', 'people', 'staff', 'employee', 'leadership', 'manoj'],
    a: 'Sea Grace is led by <b>Manoj Padmanabha</b>, Founder & Technical Lead, with community, operations, engineering and mentorship contributors supporting the initiative. You can meet the team on the <b>About Us</b> page.',
  },
  {
    k: ['explorix', 'travel'],
    a: '<b>Explorix</b> is an AI travel engineering project where contributors practice mobile architecture, geospatial search, backend APIs, RAG, and conversational AI workflows.',
  },
  {
    k: ['pickelton', 'sport', 'pickle', 'pickleball', 'badminton', 'tournament', 'scoring'],
    a: '<b>Pickelton</b> is a realtime sports engineering project for web, mobile, authentication, live scoring, Redis caching, WebSockets, leaderboards, analytics, and streaming architecture.',
  },
  {
    k: ['tradex', 'trading', 'fintech', 'tradingview', 'broker', 'market data'],
    a: '<b>Tradex</b> is an upcoming AI engineering project exploring strategy workflows, market data, FastAPI automation, analytics, risk, Redis, PostgreSQL, and machine learning signals.',
  },
  {
    k: ['ascenjo', 'career', 'job search', 'resume', 'cover letter', 'ats', 'job application'],
    a: '<b>Ascenjo</b> is an upcoming AI career engineering project for semantic matching, resume workflows, browser agents, application tracking, pgvector, Redis, and cloud architecture.',
  },
  {
    k: ['project', 'work', 'portfolio', 'case study', 'case studies', 'built'],
    a: 'The projects section showcases collaborative engineering projects such as <b>Explorix</b> and <b>Pickelton</b>, plus upcoming projects like <b>Tradex</b> and <b>Ascenjo</b>. Each one highlights technology, architecture, teamwork, and contributor learning.',
  },
  {
    k: ['join and learn', 'join learn', 'internship program', 'learning program', 'join program'],
    a: 'The <b>Join & Learn</b> path helps aspiring developers, students and graduates gain practical experience by contributing to engineering projects under mentorship.',
  },
  {
    k: ['is the program paid', 'paid internship', 'stipend', 'compensation'],
    a: 'The initiative primarily focuses on mentorship, practical experience, portfolio development and professional growth. Any future opportunities will be communicated clearly as the community evolves.',
  },
  {
    k: ['certificate', 'internship certificate'],
    a: 'Participants who successfully complete a structured contribution period may receive recognition for their contributions and achievements.',
  },
  {
    k: ['reference', 'recommendation', 'professional reference'],
    a: 'Based on performance and contribution, participants may receive professional references or recommendations.',
  },
  {
    k: ['prove my experience', 'proof of work', 'portfolio proof', 'showcase'],
    a: 'Whenever possible, completed projects are showcased with project details and contributor recognition, giving participants verifiable proof of practical engineering experience.',
  },
  {
    k: ['beginner', 'beginners', 'fresh graduate', 'student', 'career changer', 'can beginners apply'],
    a: 'Yes. We welcome motivated students, fresh graduates, career switchers and aspiring developers who are eager to learn, contribute and collaborate.',
  },
  {
    k: ['selection process', 'how to apply', 'application process', 'onboarding'],
    a: 'Our selection process focuses on motivation, potential and willingness to learn.\n\n<b>1.</b> Application review\n<b>2.</b> Introduction call\n<b>3.</b> Technical discussion\n<b>4.</b> Community onboarding',
  },
  {
    k: ['coding interview', 'coding round', 'technical interview'],
    a: 'We focus on technical understanding, problem-solving ability, motivation and learning mindset rather than competitive coding rounds.',
  },
  {
    k: ['how long is the internship', 'internship duration', 'duration', 'three months'],
    a: 'Contribution timelines depend on project needs, learning goals and participant availability.',
  },
  {
    k: ['remote', 'location', 'where are you located', 'office', 'based'],
    a: 'Sea Grace works as a remote-friendly software engineering community. Most collaboration is flexible and async-friendly.',
  },
  {
    k: ['technologies', 'tech stack', 'stack', 'technology', 'framework', 'language'],
    a: 'Depending on the project, participants may work with frontend technologies, backend systems, databases, cloud platforms, DevOps tools, AI frameworks, testing tools and deployment pipelines.\n\nRecent stacks include React, Next.js, FastAPI, Spring Boot, PostgreSQL, Redis and WebSockets.',
  },
  {
    k: ['junior developer', 'junior role', 'developer role', 'engineering opportunity', 'job', 'career', 'hire me', 'apply', 'vacancy', 'intern', 'learn', 'volunteer', 'contribute', 'grow'],
    a: 'Yes. We welcome motivated people seeking practical software engineering experience. Use the <b>Join</b> page to learn more, then apply through the contact form.',
  },
  {
    k: ['contact', 'email', 'reach', 'talk', 'call', 'get in touch'],
    a: 'To join the initiative or ask about contributing, use the <b>Contact</b> page. You can also reach Sea Grace at <b>info@seagrace.tech</b>.',
  },
  {
    k: ['response time', 'how quickly', 'reply', 'respond'],
    a: 'We aim to respond to applications and questions within 24-48 business hours.',
  },
  {
    k: ['hi', 'hello', 'hey', 'yo', 'greet', 'sup'],
    a: "Hey! I'm Grace, Sea Grace's assistant. I can tell you about the initiative, engineering projects, team, Join & Learn path, or how to apply.",
  },
  {
    k: ['thank', 'thanks', 'cheers', 'great', 'awesome', 'cool'],
    a: "Anytime. If you're ready to take the next step, head to the Contact page or keep the questions coming.",
  },
];

const FALLBACK =
  "Good question. I'm a scripted demo assistant, so I may not have that exact answer yet. I can help with <b>the initiative</b>, <b>engineering projects</b>, <b>team</b>, <b>Join & Learn</b>, <b>mentorship</b>, <b>technologies</b>, or <b>contact</b>.";

function answer(q: string) {
  const s = q.toLowerCase();
  let best: string | null = null;
  let score = 0;
  KB.forEach((item) => {
    let hits = 0;
    item.k.forEach((kw) => {
      if (s.includes(kw)) hits += kw.length;
    });
    if (hits > score) {
      score = hits;
      best = item.a;
    }
  });
  return best || FALLBACK;
}

const QUICK = ['What is Sea Grace?', 'Engineering Projects', 'Join & Learn', 'How do I apply?'];

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing]);

  function botReply(text: string) {
    setTyping(true);
    const delay = Math.min(500 + text.length * 7, 1300);
    window.setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { who: 'bot', text }]);
    }, delay);
  }

  function send(q: string) {
    if (!q.trim()) return;
    setMsgs((m) => [...m, { who: 'user', text: q.replace(/</g, '&lt;') }]);
    setInput('');
    setShowQuick(false);
    botReply(answer(q));
  }

  function openPanel() {
    setOpen(true);
    if (!greeted) {
      setGreeted(true);
      botReply("Hi, I'm <b>Grace</b>, Sea Grace's assistant. Ask me about the initiative, engineering projects, team, Join & Learn path, or how to apply.");
    }
    window.setTimeout(() => inputRef.current?.focus(), 350);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button className={'sg-launch' + (open ? ' hide' : '')} onClick={openPanel}>
        <span className="av">G</span> Ask Grace
      </button>

      <div className={'sg-panel' + (open ? ' open' : '')}>
        <div className="sg-head">
          <div className="av">G</div>
          <div className="meta">
            <b>Grace</b>
            <span>Sea Grace assistant - online</span>
          </div>
          <button className="sg-close" aria-label="Close" onClick={() => setOpen(false)}>x</button>
        </div>

        <div className="sg-body" ref={bodyRef}>
          {msgs.map((m, i) => (
            <div key={i} className={'sg-msg ' + m.who} dangerouslySetInnerHTML={{ __html: m.text }} />
          ))}
          {typing && (
            <div className="sg-typing"><i></i><i></i><i></i></div>
          )}
        </div>

        {showQuick && (
          <div className="sg-quick">
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q)}>{q}</button>
            ))}
          </div>
        )}

        <div className="sg-disc">Scripted demo assistant</div>

        <div className="sg-foot">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about Sea Grace..."
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') send(input);
            }}
          />
          <button className="sg-send" aria-label="Send" onClick={() => send(input)}>-&gt;</button>
        </div>
      </div>
    </>
  );
}
