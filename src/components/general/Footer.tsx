import Link from 'next/link';
import { person, social } from '@/resources';

type FooterProps = React.ComponentProps<'footer'>;

export default function Footer({
  className = '',
  style,
  ...props
}: FooterProps) {
  return (
    <footer
      className={`mx-5 mt-10 md:mx-36 ${className}`}
      style={style}
      {...props}
    >
      <div className="mb-20 flex w-full flex-col items-center gap-y-4 py-8 md:mb-auto md:flex-row md:gap-y-0 md:border-t md:border-gray-300">
        <p className="mx-auto text-base md:mx-0">{`© Copyright ${new Date().getFullYear()} / ${person.firstName} ${person.lastName} `}</p>
        <div className="flex flex-row items-center justify-center gap-x-4 md:ml-auto">
          {social.map(
            item =>
              item.link && (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="text-foreground transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  {item.icon}
                </Link>
              ),
          )}
        </div>
      </div>
    </footer>
  );
}
