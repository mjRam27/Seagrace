import type { Metadata } from 'next';
import './globals.css';
import NetworkBg from '@/components/NetworkBg';
import Chatbot from '@/components/Chatbot';
import Interactions from '@/components/Interactions';

export const metadata: Metadata = {
  title: 'Seagrace — You imagine it. We build it.',
  description:
    'Seagrace is a custom software studio. We design and engineer web & mobile products that turn ideas into opportunities.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Seagrace — You imagine it. We build it.',
    description:
      'A custom software studio designing and engineering web & mobile products.',
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
