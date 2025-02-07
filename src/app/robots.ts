import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1, // Optional: Set a crawl delay for Googlebot
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1, // Optional: Set a crawl delay for Bingbot
      },
      {
        userAgent: 'BadBot', // Example of blocking a specific bot
        disallow: '/',
      },
    ],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
