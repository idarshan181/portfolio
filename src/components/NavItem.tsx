'use client';

import { usePathname } from '@/libs/i18nNavigation';
import Link from 'next/link';
import SocialsNav from './SocialsNav';

type NavLabels = {
  home: string;
  about: string;
  projects: string;
  blogs: string;
  contact: string;
};

export default function NavItem({ labels }: { labels: NavLabels }) {
  const pathname = usePathname();

  return (
    <>
      {[
        { href: '/', label: labels.home },
        { href: '/about', label: labels.about },
        { href: '/projects', label: labels.projects },
        { href: '/blogs', label: labels.blogs },
        { href: '/contact', label: labels.contact },
      ].map(item => (
        <li
          key={item.href}
          className={`rounded-lg px-2 py-1 ${
            pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-foreground'
          }`}
        >
          <Link href={item.href} className="relative border-none transition-colors hover:text-primary">
            {item.label}
            {/* Chip-like active indicator */}
            {pathname === item.href && (
              <span className="absolute -bottom-1 left-1/2 mt-1 block h-1 w-8 -translate-x-1/2 rounded-full bg-blue-500" />
            )}
          </Link>
        </li>
      ))}
      <li className="rounded-lg px-2 py-1">
        <SocialsNav />
      </li>

    </>
  );
}
