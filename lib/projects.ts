export type Crew = {
  name: string;
  role: string;
  did: string;
  chips: string[];
  photo?: string;
};

export type StackItem = { badge: string; label: string; tech: string };
export type Feature = { n: string; title: string; note?: string; body: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  status?: string;
  /** Live site URL — replace "#" with the real URL when ready */
  liveUrl: string;
  liveLabel: string;
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
  brief: string[]; // paragraphs (may contain <b>…</b>)
  features: Feature[];
  stack: StackItem[];
  crew: Crew[];
};

export const projects: Project[] = [
  {
    slug: 'explorix',
    name: 'Explorix',
    category: 'AI · Travel',
    year: '2025',
    liveUrl: '#',
    liveLabel: 'explorix.app',
    cardBlurb:
      'An AI-powered mobile travel platform for feeds, maps, uploads, nearby discovery and a conversational travel assistant.',
    cardStack: ['React Native', 'Expo', 'FastAPI', 'PostGIS', 'Llama 3.2', 'JWT'],
    cardImage: '/images/explorix/landing.png',
    heroImage: '/images/explorix/landing.png',
    galleryImages: [
      { src: '/images/explorix/landing.png', label: 'Explorix landing screen' },
      { src: '/images/explorix/s1.png', label: 'Travel feed screen' },
      { src: '/images/explorix/s2.png', label: 'Travel discovery screen' },
      { src: '/images/explorix/s3.png', label: 'Travel assistant screen' },
    ],
    lead:
      'An AI-powered mobile travel platform that helps people explore places, share travel moments, find nearby points of interest and plan trips with a conversational assistant.',
    meta: { role: 'Mobile, backend, maps & AI', platform: 'Mobile' },
    briefTitle:
      'Help travelers discover places intelligently — and build custom travel experiences.',
    featuresTitle: 'Built for discovery.',
    brief: [
      'Explorix is built with React Native and Expo for a cross-platform mobile experience covering the travel feed, maps, user profiles, uploads, GPS, camera access and offline storage.',
      'FastAPI powers REST APIs, authentication, AI endpoints, POI retrieval, feed management and upload processing. PostgreSQL is the primary database, with PostGIS handling nearby place search, distance calculations, radius queries and geo-deduplication.',
      'The AI layer uses Llama 3.2 for travel Q&A, recommendations and trip planning. MongoDB stores lightweight AI memory and chat context, while RAG grounds answers with places retrieved from PostgreSQL.',
    ],
    features: [
      { n: '/ 01', title: 'Mobile travel feed', body: 'A React Native feed for discovering travel posts, places and user-generated exploration content.' },
      { n: '/ 02', title: 'Maps & nearby search', body: 'PostGIS powers ST_DWithin radius queries, ST_Distance calculations and nearby place discovery.' },
      { n: '/ 03', title: 'Uploads & profiles', body: 'Users can upload travel content, manage profiles and contribute new places from the mobile app.' },
      { n: '/ 04', title: 'AI travel assistant', body: 'Llama 3.2 supports city exploration, travel Q&A, recommendations and trip planning.' },
      { n: '/ 05', title: 'RAG retrieval', body: 'PostgreSQL retrieval injects real place context into prompts before the assistant generates an answer.' },
      { n: '/ 06', title: 'Secure login', body: 'JWT authentication and Google SSO support secure mobile sessions and quick onboarding.' },
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
    crew: [
      { name: 'Manoj Padmanabha', role: 'Founder & CEO · Product, Backend & AI', did: 'Originally built Explorix as his thesis project and owned the idea, product plan, architecture, design, backend, cloud, ML fine-tuning, RAG and AI layer.', chips: ['Thesis project', 'Backend', 'AI/RAG', 'Cloud'], photo: '/images/team/Manoj.png' },
      { name: 'Arvind', role: 'Co-founder · Local Places & RAG', did: 'Enhanced user matching in local places services and later improved the RAG connection using the data prepared for the product.', chips: ['Local places', 'Matching', 'RAG'], photo: '/images/team/arvind.jpeg' },
      { name: 'Srajanya', role: 'Associate Software Developer · Frontend & QA', did: 'Worked with Manoj on frontend improvements and helped with fine-tuning data preparation, testing and DNS handling.', chips: ['Frontend', 'Testing', 'DNS'], photo: '/images/team/Srajanya.png' },
      { name: 'Durgesh', role: 'Data Engineer', did: 'Helped with data extraction and database handling, collaborating with Manoj on the data layer that powered the product.', chips: ['Data extraction', 'Database', 'ETL'], photo: '/images/team/durgesh.jpeg' },
    ],
  },
  {
    slug: 'pickelton',
    name: 'Pickelton',
    category: 'Realtime · Sports',
    year: '2025 - ongoing',
    liveUrl: '#',
    liveLabel: 'pickelton.app',
    cardBlurb:
      'An ongoing realtime sports community & tournament platform for Pickleball and Badminton — mobile app, web dashboard, live scoring, caching, streaming and player analytics.',
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
    lead:
      'An ongoing realtime sports community & tournament management platform for Pickleball and Badminton — where players organize tournaments, track scores live, watch streams, and analyze their performance across web and mobile.',
    meta: { role: 'Realtime, auth, scoring & streaming', platform: 'Web & mobile' },
    briefTitle:
      'A sports ecosystem where players organize tournaments, track scores live, and analyze their game.',
    featuresTitle: 'A full tournament ecosystem.',
    brief: [
      'Pickelton brings Pickleball and Badminton communities together across a React Native mobile app and a Next.js web experience. Players register, create and manage clubs, spin up tournaments, schedule matches and follow brackets, all in one place.',
      'The project is ongoing, with the heart of the product built around <b>realtime</b>: live scoring streams to every viewer instantly, leaderboards update as matches play out, and different services stay synchronized through Redis caching and Redis pub/sub events.',
      'Behind it all sits a Java 21 backend, JWT authentication, PostgreSQL data storage, WebSockets for realtime scoring, and a Golang live-streaming layer using WebRTC and HLS.',
    ],
    features: [
      { n: '/ 01', title: 'Live scoring', body: 'Real-time match scoring that streams instantly to every spectator — no refresh, no lag.' },
      { n: '/ 02', title: 'Real-time leaderboards', body: 'Standings and rankings update live as matches finish, powered by Redis cache and Redis pub/sub events.' },
      { n: '/ 03', title: 'Clubs & tournaments', body: 'Create and manage clubs, spin up tournaments, and run full brackets end to end.' },
      { n: '/ 04', title: 'Match scheduling', body: 'Plan fixtures, manage rounds and keep everyone in sync across a tournament.' },
      { n: '/ 05', title: 'Player analytics', body: 'Statistics and insights that turn every match into a record of a player\u2019s progress.' },
      { n: '/ 06', title: 'Live streaming', note: 'ongoing', body: 'A Golang streaming layer with WebRTC and HLS support lets players and spectators follow events beyond the scoreline.' },
    ],
    stack: [
      { badge: 'RN', label: 'Mobile app', tech: 'React Native' },
      { badge: 'N', label: 'Web app', tech: 'Next.js' },
      { badge: 'J21', label: 'Backend', tech: 'Java 21' },
      { badge: 'Pg', label: 'Database', tech: 'PostgreSQL' },
      { badge: 'Re', label: 'Cache', tech: 'Redis' },
      { badge: 'Pub', label: 'Service events', tech: 'Redis pub/sub' },
      { badge: 'JWT', label: 'Auth', tech: 'JWT' },
      { badge: 'WS', label: 'Realtime scoring', tech: 'WebSockets' },
      { badge: 'Go', label: 'Live streaming', tech: 'Golang + WebRTC + HLS' },
    ],
    crew: [
      { name: 'Manoj Padmanabha', role: 'Founder & CEO · Product & Platform', did: 'Owns live streaming, authentication, user profiles and tournament creation workflows.', chips: ['Live streaming', 'Auth', 'Profiles', 'Tournaments'], photo: '/images/team/Manoj.png' },
      { name: 'Arvind', role: 'Co-founder · Backend', did: 'Owns matches and live scoring flows across the backend and realtime layer.', chips: ['Matches', 'Live scoring', 'Backend'], photo: '/images/team/arvind.jpeg' },
      { name: 'Srajanya', role: 'Associate Software Developer · Frontend', did: 'Builds the frontend experience for web and mobile tournament workflows.', chips: ['Frontend', 'UI', 'Realtime UI'], photo: '/images/team/Srajanya.png' },
      { name: 'Kamal', role: 'QA Engineer', did: 'Tests tournament, scoring, authentication and realtime flows for release quality.', chips: ['QA', 'Testing', 'Realtime'], photo: '/images/team/kamal.jpeg' },
      { name: 'Vishal', role: 'Senior Consultant', did: 'Advised on system architecture and the realtime design — scaling live scoring and events.', chips: ['Architecture', 'WebSockets', 'Scaling'] },
    ],
  },
  {
    slug: 'tradex',
    name: 'Tradex',
    category: 'AI / FinTech',
    year: 'Upcoming',
    status: 'Upcoming',
    liveUrl: '#',
    liveLabel: 'tradex.app',
    cardBlurb:
      'An upcoming AI-powered trading automation platform connecting TradingView strategies, market data, broker execution and portfolio analytics.',
    cardStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'TradingView', 'AI'],
    cardImage: '/images/tradex/landing.png',
    heroImage: '/images/tradex/landing.png',
    galleryImages: [
      { src: '/images/tradex/landing.png', label: 'Tradex landing preview' },
    ],
    lead:
      'An upcoming cloud-native algorithmic trading platform that connects TradingView Pine Script strategies with a FastAPI execution engine, AI signal validation, broker integrations and portfolio analytics.',
    meta: { role: 'Product, platform architecture & automation', platform: 'Web' },
    briefTitle:
      'AI-powered trading automation for strategies, signals, execution and risk.',
    featuresTitle: 'Built for trading workflows.',
    brief: [
      'Tradex is planned as a dashboard for strategy management, analytics, trade history and portfolio tracking, built with React, TypeScript and Tailwind CSS.',
      'FastAPI and Python power webhook handling, strategy APIs, user APIs, trade APIs and analytics. PostgreSQL stores users, trades, strategies, subscriptions and performance records, while Redis handles live prices, sessions, open positions, caching, pub/sub and rate limiting.',
      'The AI layer starts with Scikit-Learn, Random Forest and XGBoost for buy/sell probability and confidence scores, with a future PyTorch layer for LSTM and Transformer-based forecasting.',
    ],
    features: [
      { n: '/ 01', title: 'TradingView strategy layer', body: 'Pine Script indicators, strategies, signals and alerts connect user strategies into the Tradex automation flow.' },
      { n: '/ 02', title: 'FastAPI execution engine', body: 'Webhook, strategy, trade, user and analytics APIs coordinate the backend platform.' },
      { n: '/ 03', title: 'Market data service', body: 'Planned integrations include Binance, Alpha Vantage and Twelve Data first, with Polygon.io, Finnhub and IEX Cloud later.' },
      { n: '/ 04', title: 'Broker integrations', body: 'Broker execution support is planned across crypto, forex and stocks through providers like Binance, Bybit, Coinbase, OANDA, Alpaca and Interactive Brokers.' },
      { n: '/ 05', title: 'AI signal validation', body: 'Machine learning models score buy probability, sell probability and confidence before automation decisions.' },
      { n: '/ 06', title: 'Risk & notifications', body: 'Risk alerts and trade updates can be delivered through Telegram, Discord and email.' },
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
    crew: [
      { name: 'Vishal', role: 'Senior Consultant', did: 'Advises on platform architecture, trading workflows and technical direction.', chips: ['Architecture', 'Strategy', 'Trading'] },
      { name: 'Greeshma', role: 'Senior Software Engineer', did: 'Works across product features and engineering quality for the platform.', chips: ['Frontend', 'Backend', 'Quality'], photo: '/images/team/greeshma.png' },
      { name: 'Kamal', role: 'Associate Software Developer', did: 'Supports feature development, validation and QA for trading workflows.', chips: ['QA', 'Testing', 'Product'], photo: '/images/team/kamal.jpeg' },
      { name: 'Durgesh', role: 'Data Engineer', did: 'Supports market data, analytics pipelines and database-backed trading insights.', chips: ['Data', 'Analytics', 'Pipelines'], photo: '/images/team/durgesh.jpeg' },
    ],
  },
  {
    slug: 'ascenjo',
    name: 'Ascenjo',
    category: 'AI / CareerTech',
    year: 'Upcoming',
    status: 'Upcoming',
    liveUrl: '#',
    liveLabel: 'ascenjo.app',
    cardBlurb:
      'An upcoming AI career operating system for job discovery, resume optimization, cover letters, browser agents and application tracking.',
    cardStack: ['React', 'NestJS', 'PostgreSQL', 'pgvector', 'Redis', 'Playwright', 'AWS'],
    cardImage: '/images/ascenjo/preview1.png',
    heroImage: '/images/ascenjo/preview1.png',
    galleryImages: [
      { src: '/images/ascenjo/preview1.png', label: 'Ascenjo preview' },
    ],
    lead:
      'An upcoming AI career operating system that helps job seekers discover relevant roles, optimize resumes, generate cover letters, automate application workflows and track progress.',
    meta: { role: 'Product, AI workflow & cloud architecture', platform: 'Web' },
    briefTitle:
      'A career automation hub for search, matching, resumes and applications.',
    featuresTitle: 'Built for job seekers.',
    brief: [
      'Ascenjo is planned as a React, TypeScript, Tailwind and ShadCN web app for dashboards, job recommendations, resume workflows, application tracking and analytics.',
      'A NestJS backend with Prisma, JWT and PostgreSQL powers profiles, jobs, resumes and applications. pgvector supports semantic matching between resume embeddings and job embeddings, while Redis handles cache, sessions, rate limiting and AI response caching.',
      'The AI and agent layer uses OpenAI, Gemini or Claude for resume analysis, ATS optimization, cover letters and job scoring, with Playwright + Chromium browser agents for assisted job applications.',
    ],
    features: [
      { n: '/ 01', title: 'Profile intelligence', body: 'Parse resumes, profiles and portfolio links into skills, experience, education, projects and preferred roles.' },
      { n: '/ 02', title: 'AI job discovery', body: 'Search and rank jobs from portals and company career pages based on role, location, salary, visa needs and fit.' },
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
    crew: [
      { name: 'Manoj Padmanabha', role: 'Founder & CEO · Product & AI', did: 'Leads product direction, AI workflow design and the career automation vision.', chips: ['Product', 'AI', 'Strategy'], photo: '/images/team/Manoj.png' },
      { name: 'Arvind', role: 'Co-founder · Backend', did: 'Owns backend architecture, APIs, database workflows and service integration.', chips: ['NestJS', 'PostgreSQL', 'APIs'], photo: '/images/team/arvind.jpeg' },
      { name: 'Greeshma', role: 'Senior Software Engineer', did: 'Builds product features, frontend flows and reliable user-facing workflows.', chips: ['React', 'UI', 'Product'], photo: '/images/team/greeshma.png' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
