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
  /** Live site URL — replace "#" with the real URL when ready */
  liveUrl: string;
  liveLabel: string;
  /** Short blurb for the homepage card */
  cardBlurb: string;
  /** Stack chips shown on the homepage card */
  cardStack: string[];
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
      'An AI-powered travel discovery platform — find places, attractions and experiences tailored to you, powered by location intelligence and recommendations.',
    cardStack: ['React', 'FastAPI', 'PostGIS', 'Vector search'],
    lead:
      'An AI-powered travel discovery platform that helps people find places, attractions, restaurants and experiences tailored to their interests — powered by location intelligence and personalized recommendations.',
    meta: { role: 'Design & full-stack build', platform: 'Web' },
    briefTitle:
      'Help travelers discover places intelligently — and build custom travel experiences.',
    featuresTitle: 'Built for discovery.',
    brief: [
      'Explorix lets users explore destinations and points of interest, while an AI layer surfaces personalized recommendations based on their interests. Under the hood it leans on geographic data and location intelligence rather than expensive third-party APIs.',
      '<b>POI data</b> is stored in PostgreSQL + PostGIS, with planned sources including OpenStreetMap, GeoNames and open tourism datasets. That keeps the platform independent, affordable, and rich enough for genuinely useful discovery.',
      'On the AI side, the roadmap reaches toward itinerary generation, semantic search and a recommendation engine — embeddings and vector search turning raw places into intelligent, personal suggestions.',
    ],
    features: [
      { n: '/ 01', title: 'Explore destinations', body: 'Browse destinations and points of interest — attractions, restaurants and experiences — through a fast, map-aware interface.' },
      { n: '/ 02', title: 'Personalized recommendations', body: 'An AI layer learns what each traveler cares about and surfaces places tailored to their interests.' },
      { n: '/ 03', title: 'Location intelligence', body: 'Geographic queries powered by PostGIS — proximity, regions and spatial relationships, all in the database.' },
      { n: '/ 04', title: 'Open data, no lock-in', body: 'POI data sourced from OpenStreetMap, GeoNames and tourism datasets instead of costly paid APIs.' },
      { n: '/ 05', title: 'Semantic search', note: 'roadmap', body: 'Vector search over embeddings so travelers can search by vibe and intent, not just keywords.' },
      { n: '/ 06', title: 'Itinerary generation', note: 'roadmap', body: 'Turn a set of interests into a ready-to-go, day-by-day custom travel plan.' },
    ],
    stack: [
      { badge: 'R', label: 'Frontend', tech: 'React' },
      { badge: 'Py', label: 'Backend', tech: 'FastAPI · Python' },
      { badge: 'Pg', label: 'Database', tech: 'PostgreSQL + PostGIS' },
      { badge: 'AI', label: 'Intelligence', tech: 'Embeddings · Vector search' },
    ],
    crew: [
      { name: 'Manoj Padmanabha', role: 'Founder & CEO · Product & AI', did: 'Led product direction and the AI vision — recommendations, embeddings and the path to semantic search.', chips: ['Product', 'AI/ML', 'Vector search'], photo: '/images/team/Manoj.png' },
      { name: 'Arvind', role: 'Co-founder · Backend', did: 'Built the FastAPI backend and the PostGIS data layer — POI ingestion, spatial queries and APIs.', chips: ['FastAPI', 'PostGIS', 'Data'], photo: '/images/team/arvind.jpeg' },
      { name: 'Srajanya', role: 'Associate Software Developer · Frontend', did: 'Crafted the React frontend — the discovery experience, map interactions and a clean, fast UI.', chips: ['React', 'UI', 'Maps'], photo: '/images/team/Srajanya.png' },
      { name: 'Durgesh', role: 'Data Engineer', did: 'Built the POI data pipelines — ingesting OpenStreetMap, GeoNames and tourism datasets into PostGIS.', chips: ['Data pipelines', 'PostGIS', 'ETL'], photo: '/images/team/durgesh.jpeg' },
    ],
  },
  {
    slug: 'pickelton',
    name: 'Pickelton',
    category: 'Realtime · Sports',
    year: '2025',
    liveUrl: '#',
    liveLabel: 'pickelton.app',
    cardBlurb:
      'A realtime sports community & tournament platform for Pickleball and Badminton — clubs, live scoring, leaderboards and player analytics.',
    cardStack: ['Next.js', 'Spring Boot', 'Supabase', 'Redis', 'WebSockets'],
    lead:
      'A realtime sports community & tournament management platform for Pickleball and Badminton — where players organize tournaments, track scores live, and analyze their performance.',
    meta: { role: 'Realtime, auth & scoring', platform: 'Web' },
    briefTitle:
      'A sports ecosystem where players organize tournaments, track scores live, and analyze their game.',
    featuresTitle: 'A full tournament ecosystem.',
    brief: [
      'Pickelton brings Pickleball and Badminton communities together — players register, create and manage clubs, spin up tournaments, schedule matches and follow brackets, all in one place.',
      'The heart of the product is <b>realtime</b>: live scoring streams to every viewer instantly, leaderboards update as matches play out, and a community feed keeps players connected. We built the live scoring system, authentication &amp; security, the realtime layer over <b>WebSockets</b>, and <b>Redis</b> for events and caching.',
      'Behind it all sits player statistics and analytics — so every match adds to a player\u2019s story and helps them see how they\u2019re improving.',
    ],
    features: [
      { n: '/ 01', title: 'Live scoring', body: 'Real-time match scoring that streams instantly to every spectator — no refresh, no lag.' },
      { n: '/ 02', title: 'Real-time leaderboards', body: 'Standings and rankings update live as matches finish, powered by Redis events.' },
      { n: '/ 03', title: 'Clubs & tournaments', body: 'Create and manage clubs, spin up tournaments, and run full brackets end to end.' },
      { n: '/ 04', title: 'Match scheduling', body: 'Plan fixtures, manage rounds and keep everyone in sync across a tournament.' },
      { n: '/ 05', title: 'Player analytics', body: 'Statistics and insights that turn every match into a record of a player\u2019s progress.' },
      { n: '/ 06', title: 'Community feed', body: 'A social layer for player interaction — results, updates and connection between matches.' },
    ],
    stack: [
      { badge: 'N', label: 'Frontend', tech: 'Next.js' },
      { badge: 'Sb', label: 'Backend', tech: 'Spring Boot · Java 17' },
      { badge: 'Su', label: 'Database', tech: 'Supabase PostgreSQL' },
      { badge: 'Re', label: 'Cache & events', tech: 'Upstash Redis' },
      { badge: 'JWT', label: 'Auth', tech: 'JWT' },
      { badge: 'WS', label: 'Realtime', tech: 'WebSockets' },
    ],
    crew: [
      { name: 'Manoj Padmanabha', role: 'Founder & CEO · Product', did: 'Set the product vision and led the build — from tournament model to the realtime experience.', chips: ['Product', 'Strategy', 'Realtime'], photo: '/images/team/Manoj.png' },
      { name: 'Arvind', role: 'Co-founder · Backend', did: 'Integrated Redis for events and caching, and built core Spring Boot services powering the platform.', chips: ['Redis', 'Spring Boot', 'Events'], photo: '/images/team/arvind.jpeg' },
      { name: 'Srajanya', role: 'Associate Software Developer · Frontend', did: 'Built the Next.js frontend — live match views, leaderboards and tournament brackets.', chips: ['Next.js', 'UI', 'Realtime UI'], photo: '/images/team/Srajanya.png' },
      { name: 'Kamal', role: 'QA Engineer', did: 'Tested the live scoring and realtime flows under load — keeping match-day releases solid.', chips: ['QA', 'Load testing', 'Realtime'], photo: '/images/team/kamal.jpeg' },
      { name: 'Vishal', role: 'Senior Consultant', did: 'Advised on system architecture and the realtime design — scaling live scoring and events.', chips: ['Architecture', 'WebSockets', 'Scaling'] },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
