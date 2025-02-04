import { person, social } from '@/resources';
import Link from 'next/link';

type FooterProps = React.ComponentProps<'footer'>;

export default function Footer({ className = '', style, ...props }: FooterProps) {
  return (
    <footer className={`mt-10 ${className}`} style={style} {...props}>
      <div className="mx-20 flex flex-row border-t border-gray-300 py-8">
        <p className="text-sm">{`© Copyright ${new Date().getFullYear()} / ${person.firstName} ${person.lastName} `}</p>
        <div className="ml-auto flex flex-row items-center justify-center gap-x-4">
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
