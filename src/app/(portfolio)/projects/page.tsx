/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/Project/ProjectGrid';
import { about, baseURL, person, social } from '@/resources';
import { getBaseUrl } from '@/utils/Helpers';

export async function generateMetadata(): Promise<Metadata> {
  const baseURL = getBaseUrl();
  const title = `About ${person.name} - ${person.role}`;
  const description = `Learn about ${person.name}'s journey as a ${person.role}. ${`Darshan is a Full Stack Developer with expertise in crafting scalable
        systems and seamless user experiences. His work spans backend architecture,
        APIs, and modern frontend design.".slice(0, 150)`}`;

  const ogImage = `${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `${getBaseUrl()}/about`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@idarshan18',
    },
    alternates: {
      canonical: `${getBaseUrl()}/about`,
    },
    authors: [
      {
        name: person.name,
        url: getBaseUrl(),
      },
    ],
    keywords: [
      person.name,
      person.role,
      'About',
      'Portfolio',
      'Developer',
      'Software Engineer',
      ...about.technical.skills.map(skill => skill.category),
    ],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function ProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': person.name,
            'jobTitle': person.role,
            'description': about.intro.description,
            'url': `https://${baseURL}/about`,
            'image': `${baseURL}/images/${person.avatar}`,
            'sameAs': social.filter(item => item.link && !item.link.startsWith('mailto:')).map(item => item.link),
            'worksFor': { '@type': 'Organization', 'name': about.work.experiences[0].company || '' },
          }),
        }}
      />
      <ProjectsGrid />
    </>
  );
}
