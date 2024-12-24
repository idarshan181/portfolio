import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '../ui/button';

type HeroProps = React.ComponentProps<'div'>;

export default function Hero({ className = '', style, ...props }: HeroProps) {
  const t = useTranslations('Hero');

  return (
    <div
      className={`relative flex h-screen w-full flex-col p-20 ${className}`}
      style={style}
      {...props}
    >
      {/* <div className="square-grid-bg mask-radial" /> */}
      {/* Content */}
      <div className="z-10 m-0 mb-6 p-0">
        <h1 className="max-w-4xl text-[60px] font-medium leading-[70px] tracking-tight text-black">
          AI-powered Search
          <br />
          <span className="text-[#00b86b]">smarter, </span>
          <span className="text-[#00b86b]"> secure, </span>
          and
          <span className="text-[#00b86b]"> private.</span>
        </h1>
        <p className="max-w-2xl text-xl font-normal leading-9 text-gray-600">Engineered for top-tier performance, security, and reliability. Delivers a seamless, intuitive experience powered by advanced AI.</p>
      </div>

      <div className="mb-5 flex h-12 flex-row items-center gap-x-4">
        <Button className="h-12 text-base" aria-label={t('ctaPrimary')}>
          {t('ctaPrimary')}
        </Button>
        <Button variant="outline" className="h-12 bg-none text-base text-gray-600 hover:bg-transparent hover:text-[#00b86b]" aria-label={t('ctaSecondary')}>
          {' '}
          {t('ctaSecondary')}
          {' '}
        </Button>
      </div>

      <div className="text-base font-medium text-black">
        <Link
          href="/sign-up/"
          className="group relative border-none underline transition-all hover:text-[#00b86b]"
        >
          {t('exploreLink')}
          <span className="ml-2 inline-block no-underline transition-transform duration-300 group-hover:translate-x-2 ">
            →
          </span>
        </Link>

      </div>

      <div className="mt-auto flex flex-col items-center text-sm font-medium uppercase leading-none sm:hidden md:visible">
        <p className="">
          Trusted by top engineering and machine learning teams
        </p>
      </div>

    </div>

  );
}
