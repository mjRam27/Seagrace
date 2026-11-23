import type { Metadata } from 'next';
import './globals.css';
import NetworkBg from '@/components/NetworkBg';
import Chatbot from '@/components/Chatbot';
import Interactions from '@/components/Interactions';

export const metadata: Metadata = {
  title: 'Manoj Padmanabha - Software Engineer',
  description:
    'Portfolio of Manoj Padmanabha, a software engineer building backend systems, AI-powered applications and cloud platforms. Projects include Explorix, Pickelton, Tradex and Ascenjo.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Manoj Padmanabha - Software Engineer',
    description:
      'Backend, AI and cloud engineer. Explore the projects I have designed, built and shipped.',
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
