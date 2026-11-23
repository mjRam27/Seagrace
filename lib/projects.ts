export type StackItem = { badge: string; label: string; tech: string };
export type Feature = { n: string; title: string; note?: string; body: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  /** Shown on the card chip. 'Live' gets a pulsing dot; anything else a static one. */
  status: 'Live' | 'In development' | 'Upcoming';
  /** Live site URL - leave undefined while the project isn't deployed */
  liveUrl?: string;
  liveLabel?: string;
  /** Short blurb for the homepage card */
  cardBlurb: string;
  /** Stack chips shown on the homepage card */
  cardStack: string[];
  cardImage?: string;
  heroImage?: string;
  galleryImages?: { src: string; label: string }[];
  /** Longer lead on the detail page */
  lead: string;
  meta: { role: string; platform: string };
  briefTitle: string;
  /** Heading for the features section */
  featuresTitle: string;
  brief: string[];
  features: Feature[];
  stack: StackItem[];
  /** What I owned on this project */
  myRole: { summary: string; chips: string[] };
};

export const projects: Project[] = [
  {
    slug: 'explorix',
    name: 'Explorix',
    category: 'AI / Travel',
    year: '2025',
    status: 'Live',
    liveUrl: 'https://explorix.app',
    liveLabel: 'explorix.app',
    cardBlurb: 'An AI travel app I designed and built end to end: mobile app, geospatial search, backend APIs and a RAG-grounded travel assistant. Live in production.',
    cardStack: ['React Native', 'Expo', 'FastAPI', 'PostGIS', 'Llama 3.2', 'JWT'],
    cardImage: '/images/explorix/landing.png',
    heroImage: '/images/explorix/landing.png',
    galleryImages: [
      { src: '/images/explorix/landing.png', label: 'Explorix landing screen' },
      { src: '/images/explorix/s1.png', label: 'Travel feed screen' },
      { src: '/images/explorix/s2.png', label: 'Travel discovery screen' },
      { src: '/images/explorix/s3.png', label: 'Travel assistant screen' },
    ],
    lead: 'An AI travel discovery app that started as my M.Sc. thesis and is now live in production. I owned everything from the idea and architecture to the mobile app, backend, AI fine-tuning, RAG and cloud deployment.',
    meta: { role: 'Solo build: product, mobile, backend, AI & cloud', platform: 'Mobile' },
    briefTitle: 'A travel discovery app with a grounded AI assistant, built from scratch and shipped.',
    featuresTitle: 'What I built.',
    brief: [
      'Explorix is a React Native and Expo app covering a travel feed, maps, user profiles, uploads, GPS, camera access and offline storage.',
      'I built the FastAPI backend for REST APIs, authentication, AI endpoints, POI retrieval, feed management and upload processing. PostgreSQL with PostGIS handles nearby place search, distance calculations, radius queries and geo-deduplication.',
      'The AI layer uses Llama 3.2, which I fine-tuned with LoRA, for travel Q&A, recommendations and trip planning. MongoDB stores lightweight chat memory, and a RAG pipeline grounds every answer in real places retrieved from PostgreSQL.',
    ],
    features: [
      { n: '/ 01', title: 'Mobile travel feed', body: 'A React Native feed with content rendering, navigation, state management, uploads and user-generated exploration content.' },
      { n: '/ 02', title: 'Maps & nearby search', body: 'PostGIS powers ST_DWithin radius queries, ST_Distance calculations and nearby place discovery.' },
      { n: '/ 03', title: 'Uploads & profiles', body: 'Mobile permissions, profile workflows, media handling and content contribution flows.' },
      { n: '/ 04', title: 'AI travel assistant', body: 'A fine-tuned Llama 3.2 model for city exploration, travel Q&A, recommendations and trip planning.' },
      { n: '/ 05', title: 'RAG retrieval', body: 'PostgreSQL retrieval injects real place context into prompts before the assistant generates an answer.' },
      { n: '/ 06', title: 'Secure login', body: 'JWT authentication and Google SSO for secure mobile sessions and quick onboarding.' },
    ],
    stack: [
      { badge: 'RN', label: 'Mobile app', tech: 'React Native' },
      { badge: 'Ex', label: 'Mobile runtime', tech: 'Expo' },
      { badge: 'Py', label: 'Backend', tech: 'FastAPI' },
      { badge: 'Pg', label: 'Database', tech: 'PostgreSQL + PostGIS' },
      { badge: 'Mg', label: 'AI memory', tech: 'MongoDB' },
      { badge: 'AI', label: 'Assistant', tech: 'Llama 3.2 + RAG' },
      { badge: 'Lo', label: 'Fine-tuning', tech: 'LoRA' },
      { badge: 'JWT', label: 'Auth', tech: 'JWT + Google SSO' },
    ],
    myRole: {
      summary: 'Built Explorix from the ground up as my thesis project and took it to production. I owned the idea, product plan, architecture, mobile app, backend, data layer, ML fine-tuning, RAG pipeline, cloud deployment and DNS.',
      chips: ['Product', 'Architecture', 'Mobile', 'Backend', 'AI / RAG', 'Cloud'],
    },
  },
  {
    // TODO: fill in stack, year, liveUrl and refine copy once details are provided.
    slug: 'studywidbuddy',
    name: 'StudywidBuddy',
    category: 'AI / EdTech',
    year: '2026 - ongoing',
    status: 'In development',
    cardBlurb: 'A learning platform where you study with a matched buddy and an AI that knows your lesson, debug real code, build team projects and get matched to real jobs.',
    cardStack: ['Study buddies', 'AI coach', 'Debug labs', 'Team projects', 'Job matching'],
    cardImage: '/images/studywidbuddy/landing.png',
    heroImage: '/images/studywidbuddy/landing.png',
    galleryImages: [
      { src: '/images/studywidbuddy/workspace.png', label: 'Shared study workspace with AI Buddy' },
      { src: '/images/studywidbuddy/home.png', label: 'Learner home dashboard' },
      { src: '/images/studywidbuddy/learn.png', label: 'My Learning course slots' },
      { src: '/images/studywidbuddy/debug.png', label: 'Debug practice exercises' },
      { src: '/images/studywidbuddy/projects.png', label: 'Project recommendations' },
      { src: '/images/studywidbuddy/projects-list.png', label: 'Team projects and roles' },
      { src: '/images/studywidbuddy/jobs.png', label: 'Skill-matched jobs' },
    ],
    lead: "Don't learn alone. StudywidBuddy matches you with someone learning the same thing at your level, puts you in a shared workspace with an AI that knows what you're working on, and then turns what you've learned into real project experience and job matches.",
    meta: { role: 'Solo build: product, frontend, backend & AI', platform: 'Web' },
    briefTitle: 'Learn together, build together, grow together.',
    featuresTitle: 'What I am building.',
    brief: [
      'StudywidBuddy is built around one idea: learning sticks better with a partner. Learners pick up to four courses at their level, get matched with a study buddy on the same course, and work through lessons in a shared workspace with synced video, shared notes and buddy chat.',
      'An <b>AI Buddy</b> sits alongside every lesson. It knows the module and the exact timestamp you are on, and answers with guiding questions rather than handing out solutions.',
      'Beyond courses, learners practise on 52 debugging exercises in JavaScript, TypeScript and Python, apply for simulated professional projects in teams of 4-8 with real repos and reviews, and see real job openings ranked by the skills their courses and projects prove.',
    ],
    features: [
      { n: '/ 01', title: 'Study buddy matching', body: 'Get matched with a learner on the same course at the same level, then study together in a shared workspace.' },
      { n: '/ 02', title: 'Context-aware AI Buddy', body: 'An AI tutor that knows the current module and video timestamp and coaches with questions instead of answers.' },
      { n: '/ 03', title: 'Course slots', body: 'Up to four active courses with levels, module progress and next-lesson tracking from a single dashboard.' },
      { n: '/ 04', title: 'Debug real code', body: '52 exercises across JavaScript, TypeScript and Python that hide several bugs each, with tests, a terminal and an AI coach.' },
      { n: '/ 05', title: 'Team projects', body: 'Simulated professional projects with role-based applications, interviews and team selection, 4-8 weeks long with real repos and reviews.' },
      { n: '/ 06', title: 'Skill-matched jobs', body: 'Real openings from public job boards, ranked by proven skills, with a match score and the gaps to close.' },
    ],
    stack: [],
    myRole: {
      summary: 'Designing and building the whole platform: product, UX, the learner dashboard, course and workspace flows, debugging labs, team project applications, job matching and the AI Buddy.',
      chips: ['Product', 'UX', 'Frontend', 'Backend', 'AI'],
    },
  },
  {
    slug: 'pickelton',
    name: 'Pickelton',
    category: 'Realtime / Sports',
    year: '2025 - ongoing',
    status: 'In development',
    cardBlurb: 'A realtime sports platform I am building for web and mobile: live scoring, leaderboards, tournaments, caching and live streaming.',
    cardStack: ['React Native', 'Next.js', 'Java 21', 'Golang', 'PostgreSQL', 'Redis', 'WebSockets'],
    cardImage: '/images/screens/weblogin.png',
    heroImage: '/images/screens/weblogin.png',
    galleryImages: [
      { src: '/images/screens/weblogin.png', label: 'Web login screen' },
      { src: '/images/screens/webhome.png', label: 'Web home dashboard' },
      { src: '/images/screens/webscore.png', label: 'Live scoring screen' },
      { src: '/images/screens/phonelogin.jpeg', label: 'Mobile login screen' },
      { src: '/images/screens/phone home.jpeg', label: 'Mobile home screen' },
    ],
    lead: 'A realtime sports platform for Pickleball and Badminton communities, covering authentication, clubs, tournaments, live scoring, leaderboards, live streaming and cross-platform clients.',
    meta: { role: 'Solo build: realtime backend, streaming & clients', platform: 'Web & mobile' },
    briefTitle: 'A realtime tournament platform where every score shows up live.',
    featuresTitle: 'What I am building.',
    brief: [
      'Pickelton brings Pickleball and Badminton communities together across a React Native mobile app and a Next.js web app, with registration, club management, tournament workflows, scheduling and bracket logic.',
      'The core engineering challenge is <b>realtime</b>: live scores stream instantly, leaderboards update as matches play out, and the system stays synchronized through Redis caching and Redis pub/sub events.',
      'Behind it sits a Java 21 backend, JWT authentication, PostgreSQL, WebSockets for live scoring, and a Golang live-streaming service using WebRTC and HLS.',
    ],
    features: [
      { n: '/ 01', title: 'Live scoring', body: 'Real-time match scoring with WebSocket updates, state synchronization and latency-aware UI.' },
      { n: '/ 02', title: 'Real-time leaderboards', body: 'Standings and rankings update live as matches finish, powered by Redis cache and Redis pub/sub events.' },
      { n: '/ 03', title: 'Clubs & tournaments', body: 'Create and manage clubs, spin up tournaments, and run full brackets end to end.' },
      { n: '/ 04', title: 'Match scheduling', body: 'Plan fixtures, manage rounds and keep everyone in sync across a tournament.' },
      { n: '/ 05', title: 'Player analytics', body: 'Statistics and insights that turn every match into a record of player progress.' },
      { n: '/ 06', title: 'Live streaming', note: 'in progress', body: 'A Golang streaming service with WebRTC and HLS support for broadcasting matches.' },
    ],
    stack: [
      { badge: 'RN', label: 'Mobile app', tech: 'React Native' },
      { badge: 'N', label: 'Web app', tech: 'Next.js' },
      { badge: 'J21', label: 'Backend', tech: 'Java 21' },
      { badge: 'Pg', label: 'Database', tech: 'PostgreSQL' },
      { badge: 'Re', label: 'Cache', tech: 'Redis' },
      { badge: 'Pub', label: 'Event streams', tech: 'Redis pub/sub' },
      { badge: 'JWT', label: 'Auth', tech: 'JWT' },
      { badge: 'WS', label: 'Realtime scoring', tech: 'WebSockets' },
      { badge: 'Go', label: 'Live streaming', tech: 'Golang + WebRTC + HLS' },
    ],
    myRole: {
      summary: 'Designing and building the whole platform: system architecture, Java backend, authentication, profiles, tournaments, live scoring over WebSockets, Redis event flows, the Golang streaming service, and the web and mobile frontends.',
      chips: ['Architecture', 'Backend', 'Realtime', 'Live streaming', 'Frontend', 'Testing'],
    },
  },
  {
    slug: 'tradex',
    name: 'Tradex',
    category: 'AI / FinTech',
    year: 'Upcoming',
    status: 'Upcoming',
    cardBlurb: 'An upcoming AI trading platform I am designing: strategy automation, market data, ML signal validation, analytics and risk controls.',
    cardStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'TradingView', 'AI'],
    cardImage: '/images/tradex/landing.png',
    heroImage: '/images/tradex/landing.png',
    galleryImages: [
      { src: '/images/tradex/landing.png', label: 'Tradex landing preview' },
    ],
    lead: 'A cloud-native algorithmic trading platform built around event-driven APIs, AI signal validation, market data and portfolio analytics.',
    meta: { role: 'Solo build: platform architecture & automation', platform: 'Web' },
    briefTitle: 'Strategy automation, signals, execution and risk on one AI-driven platform.',
    featuresTitle: 'What I am planning.',
    brief: [
      'Tradex is a dashboard for strategy management, analytics, trade history and portfolio tracking, built with React, TypeScript and Tailwind CSS.',
      'FastAPI and Python power webhook handling, strategy APIs, user APIs, trade APIs and analytics. PostgreSQL stores users, trades, strategies and performance records, while Redis handles live prices, sessions, open positions, caching, pub/sub and rate limiting.',
      'The AI layer starts with Scikit-Learn, Random Forest and XGBoost for probability and confidence scoring, with a future PyTorch layer for LSTM and Transformer-based forecasting.',
    ],
    features: [
      { n: '/ 01', title: 'TradingView strategy layer', body: 'Pine Script indicators, strategies, signals and alerts drive an event-driven automation flow.' },
      { n: '/ 02', title: 'FastAPI execution engine', body: 'Webhook, strategy, trade, user and analytics APIs coordinate the backend platform.' },
      { n: '/ 03', title: 'Market data workflows', body: 'External market data APIs with normalization, caching and reliability built in.' },
      { n: '/ 04', title: 'Integration design', body: 'Execution support designed across crypto, forex and stock workflows.' },
      { n: '/ 05', title: 'AI signal validation', body: 'Machine learning models score probability and confidence before automation decisions.' },
      { n: '/ 06', title: 'Risk & notifications', body: 'Risk alerts and trade updates delivered through event queues and notifications.' },
    ],
    stack: [
      { badge: 'R', label: 'Frontend', tech: 'React + TypeScript' },
      { badge: 'Tw', label: 'UI', tech: 'Tailwind CSS' },
      { badge: 'TV', label: 'Charts & signals', tech: 'TradingView widget + Pine Script' },
      { badge: 'Py', label: 'Backend', tech: 'FastAPI + Python' },
      { badge: 'Pg', label: 'Database', tech: 'PostgreSQL' },
      { badge: 'Re', label: 'Realtime cache', tech: 'Redis' },
      { badge: 'AI', label: 'AI v1', tech: 'Scikit-Learn + XGBoost' },
      { badge: 'PT', label: 'AI v2', tech: 'PyTorch' },
      { badge: 'GCP', label: 'Cloud', tech: 'Cloud Run, Cloud SQL, Memorystore' },
      { badge: 'JWT', label: 'Auth', tech: 'JWT + roles' },
    ],
    myRole: {
      summary: 'Designing the full platform: architecture, trading workflows, FastAPI services, data pipelines, ML signal models, the React dashboard and the GCP deployment.',
      chips: ['Architecture', 'Backend', 'ML', 'Data', 'Frontend', 'Cloud'],
    },
  },
  {
    slug: 'ascenjo',
    name: 'Ascenjo',
    category: 'AI / CareerTech',
    year: 'Upcoming',
    status: 'Upcoming',
    cardBlurb: 'An upcoming AI career platform I am designing: semantic job matching, resume tooling, browser agents, application tracking and AWS architecture.',
    cardStack: ['React', 'NestJS', 'PostgreSQL', 'pgvector', 'Redis', 'Playwright', 'AWS'],
    cardImage: '/images/ascenjo/preview1.png',
    heroImage: '/images/ascenjo/preview1.png',
    galleryImages: [
      { src: '/images/ascenjo/preview1.png', label: 'Ascenjo preview' },
    ],
    lead: 'An AI career platform built around semantic search, AI workflows, browser automation, application tracking and cloud architecture.',
    meta: { role: 'Solo build: AI workflows & cloud architecture', platform: 'Web' },
    briefTitle: 'Semantic matching, AI workflows and browser automation for job seekers.',
    featuresTitle: 'What I am planning.',
    brief: [
      'Ascenjo is a React, TypeScript, Tailwind and ShadCN web app for dashboards, job recommendations, resume workflows, application tracking and analytics.',
      'A NestJS backend with Prisma, JWT and PostgreSQL powers profiles, jobs, resumes and applications. pgvector handles semantic matching between resume and job embeddings, while Redis covers cache, sessions, rate limiting and AI response caching.',
      'The AI and agent layer uses OpenAI, Gemini or Claude for resume analysis, ATS optimization, cover letters and job scoring, with Playwright + Chromium browser agents for assisted job applications.',
    ],
    features: [
      { n: '/ 01', title: 'Profile intelligence', body: 'Parse resumes, profiles and portfolio links into skills, experience, education, projects and preferred roles.' },
      { n: '/ 02', title: 'AI job discovery', body: 'Search and rank jobs from portals and career pages based on role, location, salary, visa needs and fit.' },
      { n: '/ 03', title: 'Semantic matching', body: 'PostgreSQL with pgvector stores resume and job embeddings for meaning-aware job recommendations.' },
      { n: '/ 04', title: 'Resume & cover letters', body: 'Generate ATS-optimized resumes and personalized cover letters for specific job descriptions.' },
      { n: '/ 05', title: 'Browser agent', body: 'Playwright and Chromium support assisted application workflows like filling forms and uploading resumes with user approval.' },
      { n: '/ 06', title: 'Application tracking', body: 'Track application status, interviews, offers and analytics from a single dashboard.' },
    ],
    stack: [
      { badge: 'R', label: 'Frontend', tech: 'React + TypeScript' },
      { badge: 'Tw', label: 'UI', tech: 'Tailwind CSS + ShadCN' },
      { badge: 'N', label: 'Backend', tech: 'NestJS + Prisma' },
      { badge: 'Pg', label: 'Database', tech: 'PostgreSQL + pgvector' },
      { badge: 'Re', label: 'Cache', tech: 'ElastiCache Redis' },
      { badge: 'AI', label: 'AI layer', tech: 'OpenAI, Gemini, Claude' },
      { badge: 'PW', label: 'Browser agents', tech: 'Playwright + Chromium' },
      { badge: 'AWS', label: 'Cloud', tech: 'S3, CloudFront, ECS Fargate, RDS, Cognito' },
      { badge: 'CI', label: 'CI/CD', tech: 'GitHub Actions + ECR' },
    ],
    myRole: {
      summary: 'Designing the whole product: AI workflow design, NestJS backend and data model, semantic matching, browser agents, the React frontend and the AWS architecture.',
      chips: ['AI', 'Architecture', 'Backend', 'Frontend', 'AWS'],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
