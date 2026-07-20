import type { Metadata } from 'next';
import './globals.css';
import NetworkBg from '@/components/NetworkBg';
import Chatbot from '@/components/Chatbot';
import Interactions from '@/components/Interactions';

export const metadata: Metadata = {
  title: 'Seagrace - Software Engineering Initiative',
  description:
    'Seagrace is a community-driven software engineering initiative helping aspiring developers gain practical industry experience through collaborative engineering projects, mentorship, and modern development practices.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Seagrace - Software Engineering Initiative',
    description:
      'A community-driven software engineering initiative focused on practical experience, mentorship, collaboration, and modern engineering practices.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NetworkBg />
        {children}
        <Chatbot />
        <Interactions />
      </body>
    </html>
  );
}
