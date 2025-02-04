/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import Education from '@/components/about/Education';
import TableOfContents from '@/components/about/TableOfContents';
import WorkExperience from '@/components/about/WorkExperience';
import Cal from '@/components/Cal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { about, baseURL, person, social } from '@/resources';
import Link from 'next/link';
import { FaGlobeAmericas } from 'react-icons/fa';

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/about`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map(exp => exp.company) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map(inst => inst.name) },
    { title: about.technical.title, display: about.technical.display, items: about.technical.skills.map(skill => skill.title) },
  ];

  return (
    <div className="mx-auto max-w-4xl p-4">
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

      {about.tableOfContent.display && <TableOfContents structure={structure} about={about} />}

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        {/* Left Column - Avatar, Location, Languages */}

        {about.avatar.display && (
          <div className="sticky top-24 flex h-fit flex-col items-center space-y-4 md:col-span-1">
            <Avatar className="size-48 border-2 border-gray-500">
              <AvatarImage
                src="images/avatar_main.webp"
                alt={person.name}
                className="size-48 rounded-full zoom-in-90"
              />
              <AvatarFallback className="size-48 text-2xl zoom-in-90">
                {`${person.firstName[0]}${person.lastName[0]}`}
              </AvatarFallback>
            </Avatar>

            {/* Location */}
            <div className="flex items-center space-x-2">
              <FaGlobeAmericas className="dark:text-green-500" />
              <span className="text-base text-gray-700 dark:text-gray-300">{person.location}</span>
            </div>

            {/* Languages */}
            {person.languages.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {person.languages.map(language => (
                  <span
                    key={language}
                    className="rounded bg-gray-200 px-2 py-1 text-sm text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {language}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right Column - Name, Role, Social Links, Bio */}
        <div className="flex flex-col text-center md:col-span-2 md:text-left">

          {about.calendar.display && (
            <Cal className="max-w-fit border-primary" />
          )}

          <section id={about.intro.title} className="mt-5">
            <h1 className="text-7xl font-bold leading-none">{person.name}</h1>
            <h2 className="mt-2 text-4xl font-medium leading-none text-muted-foreground">{person.role}</h2>

            {/* Social Links */}
            {social.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {social.map(item => (
                  item.link && (
                    <Button key={item.name} variant="outline" size="sm" asChild>
                      <Link href={item.link} className="flex items-center font-medium">
                        {item.icon}
                        <span className="font-bold">{item.name}</span>
                      </Link>
                    </Button>
                  )
                ))}
              </div>
            )}

            {/* Bio */}
            {about.intro.display && (
              <p className="my-6 text-base font-medium text-foreground">{about.intro.description}</p>
            )}
          </section>

          {about.work.display && (
            <section id={about.work.title} className="mt-10">
              <h2 className="mb-4 text-4xl font-bold">{about.work.title}</h2>
              <div className="space-y-6">
                {about.work.experiences.map((experience, index) => (
                  <WorkExperience key={`${experience.company}-${experience.role}`} experience={experience} isLast={index === about.work.experiences.length - 1} />
                ))}
              </div>
            </section>
          )}

          {about.studies.display && (
            <section id={about.studies.title} className="mt-10">
              <h2 className="mb-4 text-4xl font-bold">{about.studies.title}</h2>
              <div className="space-y-6">
                {about.studies.institutions.map(institute => (
                  <Education key={`${institute.name}`} institution={institute} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
