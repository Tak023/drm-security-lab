import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { PerspectiveProvider } from '@/providers/PerspectiveProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'DRM Security Lab',
    template: '%s | DRM Security Lab',
  },
  description:
    'An educational platform for understanding Digital Rights Management security concepts, attack vectors, and defense mechanisms.',
  keywords: [
    'DRM',
    'Digital Rights Management',
    'Security Research',
    'Widevine',
    'FairPlay',
    'PlayReady',
    'Encryption',
    'Content Protection',
    'Educational',
  ],
  authors: [{ name: 'DRM Security Lab' }],
  openGraph: {
    title: 'DRM Security Lab',
    description: 'Educational DRM security research platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased scrollbar-dark`}
      >
        <PerspectiveProvider>{children}</PerspectiveProvider>
      </body>
    </html>
  );
}
