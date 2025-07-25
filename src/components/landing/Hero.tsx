import Image from 'next/image';
import Link from 'next/link';
import DarshanHeadshot from '@/public/images/avatar_main.avif';
import { about, home } from '@/resources';
import { Button } from '../ui/button';

type HeroProps = React.ComponentProps<'div'>;

export default function Hero({ className = '', style, ...props }: HeroProps) {
  return (
    <div
      className={`relative mt-10 mb-12 md:mt-20 md:mb-24 flex h-auto flex-col-reverse items-center md:flex-row ${className} select-none`}
      style={style}
      {...props}
    >
      {/* Left Section */}
      <div className="flex-1 px-6 py-10 text-center md:text-left">
        {/* Headline */}
        <h1 className="text-start text-4xl text-balance font-bold leading-tight tracking-tight text-foreground md:text-6xl ">
          {home.headline}
        </h1>

        {/* Subline */}
        <h2 aria-level={2} className="mt-4 text-start text-xl leading-relaxed text-gray-600 dark:text-gray-400">
          {home.subline}
        </h2>

        {/* CTA Section */}
        <div className="mt-8 flex  flex-row items-center gap-4 md:items-start">
          <Button asChild size="lg" variant="default" className="w-1/2 text-white md:w-auto">
            <Link href="/about" className="flex items-center gap-2">
              {about.title}
            </Link>
          </Button>
          {/* <Button asChild size="lg" variant="outline" className="w-1/2 md:w-auto">
            <Link href="/projects">View Projects</Link>
          </Button> */}
          <Button asChild size="lg" variant="outline" className="w-1/2 md:w-auto">
            <Link href="/resume">View My Resume</Link>
          </Button>
        </div>
      </div>

      {/* Right Section (Headshot) */}
      <div className="relative mb-10 flex-1 md:mb-0">
        <div className="relative mx-auto size-40 overflow-hidden rounded-full ring-4 ring-primary drop-shadow-2xl  sm:size-80 ">

          <Image
            src={DarshanHeadshot}
            alt="Darshan Patel's Headshot"
            width={400}
            height={400}
            priority
            sizes="(max-width: 768px) 200px, 400px"
            quality={85}
          />
        </div>

        <div className="absolute -left-10 -top-10 hidden size-32 rounded-full bg-blue-200 blur-xl dark:bg-blue-800 md:block" />
        <div className="absolute right-12 top-12 hidden size-20 rounded-full bg-blue-300 blur-lg dark:bg-blue-700 md:block" />
      </div>
    </div>
  );
}
