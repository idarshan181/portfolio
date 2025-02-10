import type { Metadata } from 'next';
import arcjet, { detectBot, request } from '@/libs/Arcjet';
import { Env } from '@/libs/Env';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from 'next-themes';

import { Inter } from 'next/font/google';

import '@/styles/global.css';

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

const grotesk = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin', 'latin-ext'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'], // Fallbacks
});

// Improve security with Arcjet
const aj = arcjet.withRule(
  detectBot({
    mode: 'LIVE',
    // Block all bots except the following
    allow: [
      // See https://docs.arcjet.com/bot-protection/identifying-bots
      'CATEGORY:SEARCH_ENGINE', // Allow search engines
      'CATEGORY:PREVIEW', // Allow preview links to show OG images
      'CATEGORY:MONITOR', // Allow uptime monitoring services
    ],
  }),
);

export default async function RootLayout(props: {
  children: React.ReactNode;
}) {
  // Verify the request with Arcjet
  if (Env.ARCJET_KEY) {
    const req = await request();
    const decision = await aj.protect(req);

    // These errors are handled by the global error boundary, but you could also
    // redirect or show a custom error page
    if (decision.isDenied()) {
      if (decision.reason.isBot()) {
        throw new Error('No bots allowed');
      }

      throw new Error('Access denied');
    }
  }

  // Using internationalization in Client Components

  // The `suppressHydrationWarning` attribute in <body> is used to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  return (
    <html lang="en" className={grotesk.className}>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          {props.children}

          {/* <DemoBadge /> */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
