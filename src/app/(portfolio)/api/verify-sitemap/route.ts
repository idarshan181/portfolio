import { getBaseUrl } from '@/utils/Helpers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const baseUrl = getBaseUrl();
    const sitemapUrl = `${baseUrl}/sitemap.xml`;

    // Fetch the sitemap
    const response = await fetch(sitemapUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status}`);
    }

    const sitemap = await response.text();

    // Basic validation
    if (!sitemap.includes('<?xml') || !sitemap.includes('<urlset')) {
      throw new Error('Invalid sitemap format');
    }

    return NextResponse.json({
      status: 'success',
      message: 'Sitemap is valid',
      url: sitemapUrl,
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    }, { status: 500 });
  }
}
