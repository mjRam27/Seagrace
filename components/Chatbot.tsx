'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { who: 'bot' | 'user'; text: string };

const KB: { k: string[]; a: string }[] = [
  {
    k: ['who is manoj', 'who are you', 'about manoj', 'about you', 'manoj', 'introduce'],
    a: '<b>Manoj Padmanabha</b> is a software engineer who designs and builds backend systems, AI-powered applications and full-stack platforms end to end. Every project on this site was built by him.',
  },
  {
    k: ['experience', 'cricbuzz', 'background', 'worked', 'career history', 'resume', 'cv'],
    a: 'Manoj spent three years (2021-2024) as a Software Engineer at <b>Cricbuzz</b>, building high-scale backend systems. He then did an M.Sc. at SRH University Heidelberg, interned at DeepInsightsX, worked as a Student Assistant and Guest Lecturer at SRH, and volunteers as a software engineer with TUM XR. See the <b>About</b> page for details.',
  },
  {
    k: ['education', 'degree', 'university', 'masters', 'm.sc', 'msc', 'study', 'srh', 'thesis'],
    a: 'Manoj completed an <b>M.Sc. at SRH University Heidelberg</b> (2024-2026). His thesis project was <b>Explorix</b>, which is now live.',
  },
  {
    k: ['skills', 'what do you do', 'services', 'capabilities', 'specialise', 'specialize', 'good at'],
    a: 'Manoj works across <b>backend engineering</b>, <b>frontend & mobile</b>, <b>AI engineering</b> (LLMs, RAG, fine-tuning) and <b>cloud & DevOps</b>. Backend, AI and cloud are where he goes deepest.',
  },
  {
    k: ['technologies', 'tech stack', 'stack', 'technology', 'framework', 'language'],
    a: 'Recent stacks include React, Next.js, React Native, FastAPI, Java 21, Golang, NestJS, PostgreSQL + PostGIS, pgvector, Redis, MongoDB, WebSockets, Llama 3.2 with LoRA and RAG, plus AWS and GCP.',
  },
  {
    k: ['explorix', 'travel', 'live', 'deployed'],
    a: '<b>Explorix</b> is an AI travel app Manoj built end to end and it is <b>live at <a href="https://explorix.app" target="_blank" rel="noopener noreferrer">explorix.app</a></b>. It has a React Native app, FastAPI backend, PostGIS geospatial search and a fine-tuned Llama 3.2 assistant grounded with RAG.',
  },
  {
    k: ['studywidbuddy', 'study with buddy', 'studywid', 'buddy', 'study partner', 'edtech', 'learning platform'],
    a: '<b>StudywidBuddy</b> is a learning platform Manoj is building: study with a matched buddy in a shared workspace, get help from a context-aware AI Buddy, practise on debugging exercises, join team projects and see skill-matched jobs.',
  },
  {
    k: ['pickelton', 'sport', 'pickle', 'pickleball', 'badminton', 'tournament', 'scoring'],
    a: '<b>Pickelton</b> is a realtime sports platform Manoj is building for web and mobile: live scoring over WebSockets, Redis-powered leaderboards, tournaments and a Golang live-streaming service.',
  },
  {
    k: ['tradex', 'trading', 'fintech', 'tradingview', 'broker', 'market data'],
    a: '<b>Tradex</b> is an upcoming AI trading platform Manoj is designing, with strategy automation, FastAPI services, ML signal validation, Redis, PostgreSQL and GCP.',
  },
  {
    k: ['ascenjo', 'job search', 'cover letter', 'ats', 'job application'],
    a: '<b>Ascenjo</b> is an upcoming AI career platform Manoj is designing, with semantic job matching on pgvector, resume tooling, Playwright browser agents and AWS architecture.',
  },
  {
    k: ['project', 'work', 'portfolio', 'case study', 'case studies', 'built'],
    a: 'Manoj has built five projects: <b>Explorix</b> (live), <b>StudywidBuddy</b> and <b>Pickelton</b> (in development), and the upcoming <b>Tradex</b> and <b>Ascenjo</b>. Each one is designed and built by him. Open any of them from the Projects section.',
  },
  {
    k: ['hire', 'job', 'role', 'available', 'opportunity', 'freelance', 'collaborate', 'work with'],
    a: 'Manoj is open to software engineering roles and collaborations. The best way to reach him is the <b>Contact</b> page.',
  },
  {
    k: ['location', 'where', 'based', 'country', 'germany'],
    a: 'Manoj is based in <b>Germany</b>.',
  },
  {
    k: ['contact', 'email', 'reach', 'talk', 'call', 'get in touch'],
    a: 'You can reach Manoj through the form on the <b>Contact</b> page. He usually replies within 1-2 days.',
  },
  {
    k: ['hi', 'hello', 'hey', 'yo', 'greet', 'sup'],
    a: "Hey! I can tell you about Manoj's experience, skills, projects, or how to get in touch.",
  },
  {
    k: ['thank', 'thanks', 'cheers', 'great', 'awesome', 'cool'],
    a: 'Anytime. If you want to talk to Manoj directly, head to the Contact page.',
  },
];

const FALLBACK =
  "Good question. I'm a scripted assistant, so I may not have that exact answer. I can help with Manoj's <b>experience</b>, <b>skills</b>, <b>projects</b>, <b>tech stack</b>, or how to <b>get in touch</b>.";

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

const QUICK = ['Who is Manoj?', 'Projects', 'Experience', 'How do I get in touch?'];

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
      botReply("Hi! I'm Manoj's portfolio assistant. Ask me about his experience, skills, projects, or how to get in touch.");
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
        <span className="av">M</span> Ask about me
      </button>

      <div className={'sg-panel' + (open ? ' open' : '')}>
        <div className="sg-head">
          <div className="av">M</div>
          <div className="meta">
            <b>Portfolio assistant</b>
            <span>Ask about Manoj - online</span>
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

        <div className="sg-disc">Scripted assistant</div>

        <div className="sg-foot">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about Manoj..."
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
