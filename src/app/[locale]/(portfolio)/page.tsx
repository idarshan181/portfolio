/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import Hero from '@/components/landing/Hero';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { about, baseURL, home, person } from '@/resources';

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
    verification: {
      google: '2pu3aZP-s75gbnIcPzPHg69yQhWTlzppNcrGEcehsSg',
    },
  };
}

export default async function Index() {
  return (
    <div className="flex w-full flex-col items-center ">
      {/* Metadata (Dynamic SEO with Hero Content) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': home.title,
            'jobTitle': person.role,
            'description': about.intro.description,
            'url': `https://idarshan18.com`,
            'image': '/images/avatar_main.webp',
            'sameAs': [
              'https://github.com/idarshan181',
              'https://www.linkedin.com/in/idarshan18/',
              'https://twitter.com/darshan18',
            ],
            'location': {
              '@type': 'Place',
              'name': person.location,
            },
            'knowsLanguage': person.languages,
            'alumniOf': about.studies.institutions.map(edu => ({
              '@type': 'EducationalOrganization',
              'name': edu.name,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <Hero className="relative size-full bg-background" />

      {/* Projects Section */}
      <div className="mx-auto max-w-5xl ">
        <Card className="">
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
