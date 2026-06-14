export type Member = {
  name: string;
  role: string;
  bio: string;
  /** path under /public, e.g. "/images/team/Manoj.png" — leave undefined for a placeholder */
  photo?: string;
};

export const team: Member[] = [
  { name: 'Manoj Padmanabha', role: 'Founder & CEO', bio: "Steers vision, partnerships and the studio's relentless focus on craft.", photo: '/images/team/Manoj.png' },
  { name: 'Vishal', role: 'Consultant & Co-founder', bio: 'Advises on technical direction and keeps the bar high across every build.', photo: '/images/team/VIshal.png' },
  { name: 'Vinith', role: 'Business Lead & Co-founder', bio: 'Leads business development, partnerships and the commercial strategy behind Seagrace.', photo: '/images/team/Vinith.png' },
  { name: 'Arvind', role: 'Co-founder', bio: 'Full-stack builder — backend systems, APIs and the glue that holds it together.', photo: '/images/team/arvind.jpeg' },
  { name: 'Adithya', role: 'CFO & Marketing', bio: 'Runs finance and growth — keeps the studio healthy and getting found.', photo: '/images/team/adithya.png' },
  { name: 'Greeshma', role: 'Senior Software Engineer', bio: 'Ships robust features across the stack with deep care for quality.', photo: '/images/team/greeshma.png' },
  // { name: 'Vishwa', role: 'Senior Fullstack Developer', bio: 'Owns features end to end — from the data layer to a polished UI.' },
  { name: 'Durgesh', role: 'Data Engineer', bio: 'Builds the data pipelines and models that turn raw data into product fuel.', photo: '/images/team/durgesh.jpeg' },
  { name: 'Srajanya', role: 'Associate Software Engineer', bio: 'Product engineering with an eye for interface detail and clean UX.', photo: '/images/team/Srajanya.png' },
  // { name: 'Amrutha', role: 'Junior Software Developer', bio: 'Builds dependable features end to end — and grows fast doing it.' },
];
