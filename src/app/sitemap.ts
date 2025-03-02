import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();

  // Add your static routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/dashboard',
    '/contact',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
