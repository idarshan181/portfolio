/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
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
  metadataBase: new URL('https://idarshan18.com'),
  manifest: '/site.webmanifest',
  title: {
    default: 'Darshan Patel | Full Stack Developer',
    template: '%s | Darshan Patel',
  },
  description: 'Full Stack Developer specializing in React, Next.js, and TypeScript. Building scalable web applications with modern technologies.',
  keywords: ['Darshan Patel', 'Full Stack Developer', 'React Developer', 'Next.js', 'TypeScript', 'Darshan Patel MUN', 'Darshan Patel Memorial University', 'Darshan Patel Software Developer', 'Darshan Patel PlayPower Labs', 'Darshan Patel Full Stack Developer'],
  authors: [{ name: 'Darshan Patel' }],
  creator: 'Darshan Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://idarshan18.com',
    siteName: 'Darshan Patel - Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Darshan Patel - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darshan Patel | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and TypeScript',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Darshan Patel',
              'url': 'https://idarshan18.com',
              'jobTitle': 'Full Stack Developer',
              'sameAs': [
                'https://github.com/idarshan181',
                'https://linkedin.com/in/idarshan18',
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors closeButton />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
