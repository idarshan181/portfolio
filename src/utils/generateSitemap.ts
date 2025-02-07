import fs from 'node:fs';
import { getBaseUrl } from './Helpers';

export async function generateSitemap() {
  const baseUrl = getBaseUrl();

  // Define your pages
  const pages = [
    {
      url: '',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: 'about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: 'projects',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: 'hobbies',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: 'contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    },
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          page => `
        <url>
          <loc>${baseUrl}${page.url ? `/${page.url}` : ''}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `,
        )
        .join('')}
    </urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
