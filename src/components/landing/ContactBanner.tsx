import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

type ContactBannerProps = React.ComponentProps<'div'>;
export default function ContactBanner({ className = '', style, ...props }: ContactBannerProps) {
  const t = useTranslations('Hero');
  // bg-gradient-to-br
  return (
    <div className={`relative z-10 mx-10 rounded-lg bg-gradient-to-br from-[#007f4e] to-[#00b86b] p-10 md:mx-20 ${className}`} style={style} {...props}>
      {/* Grid Overlay */}
      {/* <div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 20px)
      `,
          opacity: 0.6, // Adjust overall grid visibility
          zIndex: 1,
        }}
      /> */}

      {/* Hexagonal Pattern */}
      {/* <div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          backgroundImage: `
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 15px,
          rgba(255, 255, 255, 0.1) 15px,
          rgba(255, 255, 255, 0.1) 30px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 15px,
          rgba(255, 255, 255, 0.1) 15px,
          rgba(255, 255, 255, 0.1) 30px
        )
      `,
          backgroundSize: '100px 60px',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      /> */}

      {/* Wave SVG */}
      <svg
        className="pointer-events-none absolute inset-0 size-full rounded-lg opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255, 255, 255, 0.3)"
          d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,245.3C672,267,768,277,864,266.7C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
        <path
          fill="rgba(255, 255, 255, 0.2)"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,160C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
      </svg>

      <div className="z-20 w-full gap-y-16">
        <div className="m-0 mb-6 flex flex-col gap-y-4 p-0">
          <h1 className="text-2xl font-medium tracking-tight text-white md:text-6xl">
            {t('contact_banner_title')}
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-white md:text-4xl">
            {t('contact_banner_subtitle')}
          </h2>
          {/* <p className="max-w-2xl text-lg font-medium text-white">We love partnering with companies developing innovative AI products by providing the most customizable model deployment with the lowest latency.</p> */}
        </div>
        <div className="flex w-full flex-col justify-center gap-y-4 md:h-full md:flex-row md:items-center md:justify-start md:gap-x-8">
          <Button className="group flex h-12 w-full max-w-56 justify-between text-base" aria-label={t('ctaPrimary')}>
            {t('ctaPrimary')}
            <span className="ml-2 inline-block no-underline transition-transform duration-300 group-hover:translate-x-2 ">
              →
            </span>
          </Button>
          <Button variant="outline" className="flex h-12 w-full max-w-56 flex-row justify-start bg-transparent text-base text-white" aria-label={t('ctaSecondary')}>
            {' '}
            {t('ctaSecondary')}
            {' '}
          </Button>
        </div>
      </div>
    </div>

  );
}
