export type Member = {
  name: string;
  role: string;
  bio: string;
  /** path under /public, e.g. "/images/team/Manoj.png" - leave undefined for a placeholder */
  photo?: string;
};

export const team: Member[] = [
  { name: 'Manoj Padmanabha', role: 'Founder & Technical Lead', bio: 'Leads the technical vision, architecture discussions, mentorship, and engineering standards behind Seagrace.', photo: '/images/team/Manoj.png' },
  { name: 'Vinith', role: 'Community & Operations Lead', bio: 'Supports community coordination, contributor operations, and the structure that keeps Seagrace learning-focused.', photo: '/images/team/Vinith.png' },
  { name: 'Arvind', role: 'Co-founder', bio: 'Full-stack contributor focused on backend systems, APIs, and collaborative engineering practice.', photo: '/images/team/arvind.jpeg' },
  { name: 'Adithya', role: 'Community Growth & Outreach', bio: 'Helps Seagrace reach aspiring developers and build stronger learning pathways.', photo: '/images/team/adithya.png' },
  { name: 'Greeshma', role: 'Senior Software Engineer', bio: 'Mentors contributors and helps ship robust features across the stack with deep care for quality.', photo: '/images/team/greeshma.png' },
  // { name: 'Vishwa', role: 'Senior Fullstack Developer', bio: 'Owns features end to end - from the data layer to a polished UI.' },
  { name: 'Durgesh', role: 'Data Engineer', bio: 'Builds data pipelines and models while supporting contributors working with data systems.', photo: '/images/team/durgesh.jpeg' },
  { name: 'Srajanya', role: 'Associate Software Developer', bio: 'Contributes to software engineering with an eye for interface detail and clean UX.', photo: '/images/team/Srajanya.png' },
  { name: 'Kamal', role: 'Associate Software Developer', bio: 'Builds and tests software features with care for reliability and user experience.', photo: '/images/team/kamal.jpeg' },
  // { name: 'Amrutha', role: 'Junior Software Developer', bio: 'Builds dependable features end to end - and grows fast doing it.' },
  { name: 'Vishal', role: 'Senior Technical Mentor', bio: 'Advises on technical direction, system architecture, and engineering quality across projects.' },
];
