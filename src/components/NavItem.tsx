'use client';

import { usePathname } from '@/libs/i18nNavigation';

import Link from 'next/link';
import { Fragment } from 'react';
import { GrProjects } from 'react-icons/gr';
import { LiaHomeSolid } from 'react-icons/lia';
import { MdSpaceDashboard } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { VscAccount } from 'react-icons/vsc';
import { Separator } from './ui/separator';

type NavLabels = {
  home: string;
  about: string;
  projects: string;
  hobbies: string;
  contact: string;
};

export default function NavItem({ labels }: { labels: NavLabels }) {
  const pathname = usePathname();

  return (
    <>
      {[
        { href: '/', label: labels.home, icon: <LiaHomeSolid size={24} /> },
        { href: '/about', label: labels.about, icon: <VscAccount size={16} /> },
        { href: '/projects', label: labels.projects, icon: <GrProjects size={16} /> },
        { href: '/hobbies', label: labels.hobbies, icon: <MdSpaceDashboard size={16} /> },
        { href: '/contact', label: labels.contact, icon: <TiContacts size={16} /> },
      ].map((item, index) => (
        <Fragment key={item.href}>
          <li
            className={`rounded-lg px-3 py-2 ${pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-foreground'
            }`}
          >
            <Link
              href={item.href}
              className="relative flex items-center gap-x-2 text-sm font-medium transition-colors hover:text-primary"
            >
              {item.icon}
              {/* {index !== 0 ? item.label : ''} */}
              <span className="hidden sm:inline">{item.label}</span>
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-1/2 mt-1 block h-1 w-8 -translate-x-1/2 rounded-full bg-blue-500" />
              )}
            </Link>
          </li>
          {index === 0 && (
            <Separator orientation="vertical" className="mx-3 h-6 border-l border-gray-300" />
          )}
        </Fragment>
      ))}
      {/* <li className="rounded-lg px-2 py-1">
        <SocialsNav />
      </li> */}

    </>
  );
}
