'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { who: 'bot' | 'user'; text: string };

const KB: { k: string[]; a: string }[] = [
  {
    k: ['what is sea grace', 'what is seagrace', 'about sea grace', 'about seagrace', 'company'],
    a: '<b>Sea Grace</b> is a software development studio focused on building modern digital products, AI-powered solutions, and scalable web applications. We help businesses transform ideas into successful products while creating opportunities for talented engineers to gain real-world experience through meaningful project work.',
  },
  {
    k: ['what does sea grace do', 'what do you do', 'services', 'offer', 'capabilities', 'build', 'make'],
    a: 'We design, develop, deploy and maintain software solutions including <b>web applications</b>, <b>mobile applications</b>, <b>AI solutions</b>, <b>cloud platforms</b>, business automation systems and custom digital products.',
  },
  {
    k: ['different', 'why choose', 'special', 'unique', 'what makes'],
    a: 'We combine experienced technical leadership, modern technologies and hands-on execution. We work closely with clients, provide end-to-end ownership, and focus on delivering practical business value rather than just writing code.',
  },
  {
    k: ['startup', 'startups', 'non technical', 'non-technical', 'founder', 'founders', 'idea'],
    a: 'Yes. We work with startups and non-technical founders. We help turn early ideas into clear product plans, prototypes, MVPs and scalable production systems.',
  },
  {
    k: ['industry', 'industries', 'domain', 'sectors'],
    a: 'We work across industries including AI, travel, education, sports technology, e-commerce, business automation, SaaS and custom software development.',
  },
  {
    k: ['vision'],
    a: 'Our vision is to become a global technology company that creates impactful products, advances innovation through artificial intelligence, and unlocks opportunities for the next generation of builders and problem solvers.',
  },
  {
    k: ['mission'],
    a: 'Our mission is to transform bold ideas into scalable digital products, deliver exceptional technology solutions for our clients, and cultivate engineering talent through real-world execution, mentorship and continuous learning.',
  },
  {
    k: ['tell us about your team', 'about your team', 'team details', 'your team'],
    a: 'Sea Grace is a team of ambitious builders, engineers, designers and problem-solvers united by a shared goal: creating meaningful technology that delivers real value.\n\nOur team combines experienced professionals from different technical domains with emerging talent who are passionate about learning and innovation. This blend allows us to bring fresh perspectives, modern technologies and practical industry experience to every project.\n\nWe believe great products are built through collaboration, continuous learning and ownership.',
  },
  {
    k: ['who works on my project', 'who will work on my project', 'project team', 'works on my project', 'who builds my project'],
    a: 'Every project is led by experienced team members who oversee planning, architecture, quality and delivery. Depending on the project needs, specialists in frontend development, backend engineering, cloud infrastructure, AI, design and testing may be involved.\n\nThis collaborative approach ensures that each project benefits from diverse expertise while maintaining a high standard of quality and accountability.',
  },
  {
    k: ['team', 'who are you', 'people', 'staff', 'employee'],
    a: 'Sea Grace is led by <b>Manoj Padmanabha</b> (Founder & CEO), with co-founders <b>Vishal</b> (Consultant), <b>Vinith</b> (Business Lead) and <b>Arvind</b>, plus <b>Adithya</b> (CFO & Marketing) and the engineering crew: Greeshma, Durgesh and Srajanya. You can meet the team on the <b>About Us</b> page.',
  },
  {
    k: ['ceo', 'manoj', 'leader', 'leadership'],
    a: '<b>Manoj Padmanabha</b> is the founder and CEO of Sea Grace. The studio runs on his belief that great products come from small teams who care, take ownership and build with purpose.',
  },
  {
    k: ['ui ux', 'ui/ux', 'design', 'wireframe', 'wireframing', 'user experience'],
    a: 'Yes. We provide wireframing, UI design, user experience improvements and complete product design services, from early product flows to polished interfaces.',
  },
  {
    k: ['ai powered', 'ai product', 'artificial intelligence', 'chatbot', 'recommendation', 'automation', 'intelligent search', 'document processing', 'machine learning', 'ml'],
    a: 'Yes. We develop AI-powered solutions including chatbots, recommendation systems, automation workflows, intelligent search, document processing and custom AI integrations.',
  },
  {
    k: ['existing project', 'fix project', 'continue project', 'modernize', 'audit', 'legacy'],
    a: 'Yes. We can audit, improve, modernize or continue development of existing applications and codebases. We first understand the current system, then propose a practical improvement plan.',
  },
  {
    k: ['cloud', 'devops', 'deployment', 'deploy', 'hosting', 'scale', 'monitoring'],
    a: 'Yes. We assist with cloud infrastructure, deployment pipelines, monitoring, hosting, scaling and maintenance.',
  },
  {
    k: ['how does a project start', 'start a project', 'project start', 'how do we start', 'process', 'work with', 'engage', 'steps', 'begin'],
    a: 'We begin with a discovery discussion to understand your requirements, business goals, timeline and budget. Then we propose the best solution and plan the first milestone.\n\nTypical flow: discovery, scope, design, build, launch, then iterate.',
  },
  {
    k: ['free consultation', 'consultation', 'intro call', 'discovery call'],
    a: 'Yes. We offer a free initial consultation to discuss your project and explore possible solutions.',
  },
  {
    k: ['price', 'cost', 'budget', 'how much', 'rate', 'quote', 'payment', 'pay'],
    a: 'Pricing depends on scope, timeline and complexity. Most projects are divided into milestones. A deposit is typically required before development begins, with remaining payments linked to agreed project milestones.',
  },
  {
    k: ['fixed price', 'hourly', 'retainer', 'support agreement'],
    a: 'Depending on project requirements, we offer fixed-price projects, hourly engagements and ongoing support agreements.',
  },
  {
    k: ['who owns the code', 'ownership', 'intellectual property', 'ip', 'source code'],
    a: 'Upon final payment, ownership of project deliverables, source code and intellectual property is transferred to the client unless otherwise agreed in writing.',
  },
  {
    k: ['nda', 'confidential', 'confidentiality'],
    a: 'Yes. We are happy to sign a mutual NDA before discussing confidential business ideas or project details.',
  },
  {
    k: ['after launch', 'post launch', 'maintenance', 'updates', 'bug fixes', 'technical support'],
    a: 'After launch, we can continue providing maintenance, updates, performance improvements, bug fixes and technical support.',
  },
  {
    k: ['not satisfied', 'revision', 'revisions', 'changes', 'expectations'],
    a: 'We work closely with clients throughout development and include agreed revision cycles to make sure the final product aligns with expectations.',
  },
  {
    k: ['explorix', 'travel'],
    a: '<b>Explorix</b> is an AI-powered travel discovery platform that helps people find places, attractions, restaurants and experiences tailored to their interests using location intelligence and personalized recommendations.\n\nStack: React, FastAPI, PostgreSQL + PostGIS and vector search.',
  },
  {
    k: ['pickelton', 'sport', 'pickle', 'pickleball', 'badminton', 'tournament', 'scoring'],
    a: '<b>Pickelton</b> is a real-time sports community and tournament platform for Pickleball and Badminton, with clubs, tournaments, live scoring, real-time leaderboards and player analytics.\n\nStack: Next.js, Spring Boot, Supabase, Redis and WebSockets.',
  },
  {
    k: ['project', 'work', 'portfolio', 'case study', 'case studies', 'built'],
    a: 'We have shipped products like <b>Explorix</b> for AI travel discovery and <b>Pickelton</b> for real-time sports tournaments. Visit the Work section to read the case studies.',
  },
  {
    k: ['join and learn', 'join learn', 'internship program', 'learning program', 'join program'],
    a: 'The <b>Join & Learn Program</b> allows aspiring developers, students and graduates to gain real-world experience by contributing to live products and projects under the guidance of experienced professionals.',
  },
  {
    k: ['is the program paid', 'paid internship', 'stipend', 'compensation'],
    a: 'The program primarily focuses on mentorship, practical experience, portfolio development and professional growth. Compensation opportunities may become available as projects and business requirements evolve.',
  },
  {
    k: ['certificate', 'internship certificate'],
    a: 'Yes. Participants who successfully complete the program receive an Internship Certificate recognizing their contributions and achievements.',
  },
  {
    k: ['reference', 'recommendation', 'professional reference'],
    a: 'Yes. Based on performance and contribution, participants may receive professional references and recommendations.',
  },
  {
    k: ['prove my experience', 'proof of work', 'portfolio proof', 'showcase'],
    a: 'Whenever possible, completed projects are showcased on our website with project details and contributor recognition, giving participants verifiable proof of work for portfolios and professional profiles.',
  },
  {
    k: ['beginner', 'beginners', 'fresh graduate', 'student', 'career changer', 'can beginners apply'],
    a: 'Yes. We welcome motivated students, fresh graduates, career changers and aspiring developers who are eager to learn and contribute.',
  },
  {
    k: ['selection process', 'how to apply', 'application process', 'onboarding'],
    a: 'Our selection process focuses on motivation, potential and willingness to learn.\n\n<b>1.</b> Application review\n<b>2.</b> Introduction call\n<b>3.</b> Technical discussion\n<b>4.</b> Team onboarding',
  },
  {
    k: ['coding interview', 'coding round', 'technical interview'],
    a: 'For internship candidates, we do not conduct competitive coding rounds. We focus on technical understanding, problem-solving ability, motivation and learning mindset.',
  },
  {
    k: ['how long is the internship', 'internship duration', 'duration', 'three months'],
    a: 'Most internship opportunities run for up to three months, depending on project requirements and participant availability.',
  },
  {
    k: ['remote', 'location', 'where are you located', 'office', 'based'],
    a: 'Sea Grace operates as a modern technology studio with remote collaboration and global project delivery capabilities. Most Join & Learn collaboration is remote and flexible.',
  },
  {
    k: ['technologies', 'tech stack', 'stack', 'technology', 'framework', 'language'],
    a: 'Depending on the project, participants and builders may work with frontend technologies, backend systems, databases, cloud platforms, DevOps tools, AI frameworks, testing tools and deployment pipelines.\n\nRecent stacks include React, Next.js, FastAPI, Spring Boot, PostgreSQL, Supabase, Redis and WebSockets.',
  },
  {
    k: ['junior developer', 'junior role', 'developer role', 'engineering opportunity', 'job', 'career', 'hire me', 'apply', 'vacancy', 'intern', 'learn', 'volunteer', 'contribute', 'grow'],
    a: 'Yes. We welcome applications from candidates seeking Junior Developer, Internship and Engineering opportunities. Use the <b>Join</b> page to learn more, then apply through the contact form.',
  },
  {
    k: ['contact', 'email', 'reach', 'talk', 'call', 'get in touch'],
    a: 'For project inquiries, partnerships, applications or general questions, use the <b>Contact</b> page. You can also reach Sea Grace at <b>info@seagrace.tech</b>.',
  },
  {
    k: ['response time', 'how quickly', 'reply', 'respond'],
    a: 'We aim to respond to inquiries within 24-48 business hours.',
  },
  {
    k: ['hi', 'hello', 'hey', 'yo', 'greet', 'sup'],
    a: "Hey! I'm Grace, Sea Grace's assistant. I can tell you about our services, projects, team, Join & Learn program, or how to start a project. What brings you here?",
  },
  {
    k: ['thank', 'thanks', 'cheers', 'great', 'awesome', 'cool'],
    a: "Anytime. If you're ready to take the next step, head to the Contact page or keep the questions coming.",
  },
];

const FALLBACK =
  "Good question. I'm a scripted demo assistant, so I may not have that exact answer yet. I can help with <b>services</b>, <b>projects</b>, <b>team</b>, <b>pricing</b>, <b>Join & Learn</b>, <b>internships</b>, <b>ownership</b>, <b>NDA</b>, or <b>contact</b>.";

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

const QUICK = ['What is Sea Grace?', 'Services', 'Join & Learn', 'Start a project'];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
      botReply("Hi, I'm <b>Grace</b>, Sea Grace's assistant. Ask me about our work, services, team, Join & Learn program, or how to start a project.");
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
