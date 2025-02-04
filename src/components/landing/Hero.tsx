import { about, home, person } from '@/resources';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

type HeroProps = React.ComponentProps<'div'>;

export default function Hero({ className = '', style, ...props }: HeroProps) {
  return (
    <div
      className={`relative flex h-[70vh] flex-col-reverse items-center md:flex-row ${className}`}
      style={style}
      {...props}
    >
      {/* Left Section */}
      <div className="flex-1 px-6 py-10 text-center md:text-left">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
          {home.headline}
        </h1>

        {/* Subline */}
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {home.subline}
        </p>

        {/* CTA Section */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
          <Button asChild size="lg" variant="default">
            <Link href="/about" className="flex items-center gap-2">
              {about.avatar.display && (
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={person.name}
                    className="size-8 rounded-full"
                  />
                  <AvatarFallback>
                    {`${person.firstName[0]}${person.lastName[0]}`}
                  </AvatarFallback>
                </Avatar>
              )}
              {about.title}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>

      {/* Right Section (Headshot) */}
      <div className="relative mb-10 flex-1 md:mb-0">
        <div className="relative mx-auto size-40 overflow-hidden rounded-full shadow-lg ring-4 ring-blue-400 dark:ring-blue-600 sm:size-56">
          <Image
            src="https://github.com/shadcn.png"
            alt={`${person.name}'s Headshot`}
            width={224} // For h-56 (56 * 4 = 224px)
            height={224}
            className="size-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-10 -top-10 size-32 rounded-full bg-blue-200 blur-xl dark:bg-blue-800"></div>
        <div className="absolute right-12 top-12 size-20 rounded-full bg-blue-300 blur-lg dark:bg-blue-700"></div>
      </div>
    </div>

  );
}
