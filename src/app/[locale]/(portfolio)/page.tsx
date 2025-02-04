/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import Hero from '@/components/landing/Hero';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { baseURL, home, person } from '@/resources';

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    metadataBase: new URL(`https://${baseURL}`),
  };
}

export default async function Index() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Metadata (Dynamic SEO with Hero Content) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': home.title,
            'description': home.description,
            'url': `https://${baseURL}`,
            'image': `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            'publisher': {
              '@type': 'Person',
              'name': person.name,
              'image': {
                '@type': 'ImageObject',
                'url': `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <Hero className="relative size-full bg-background" />

      {/* Projects Section */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <Card>
          <CardHeader>
            <CardTitle>Featured Projects</CardTitle>
            <CardDescription>
              Explore some of my best work, built using modern tools and technologies.
            </CardDescription>
          </CardHeader>
          {/* <Projects range={[1, 3]} /> */}
        </Card>
      </div>
    </div>
  );
};
