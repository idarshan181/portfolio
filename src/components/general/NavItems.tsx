'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { GrProjects } from 'react-icons/gr';
import { LiaHomeSolid } from 'react-icons/lia';
import { MdSpaceDashboard } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { VscAccount } from 'react-icons/vsc';
import { Separator } from '../ui/separator';

// Define navigation items with icons and labels
const navItems = [
  { icon: LiaHomeSolid, label: 'Home', value: '/' },
  { icon: VscAccount, label: 'About', value: '/about' },
  { icon: GrProjects, label: 'Projects', value: '/projects' },
  { icon: MdSpaceDashboard, label: 'Dashboard', value: '/dashboard' },
  { icon: TiContacts, label: 'Contact', value: '/contact' },
];

export default function NavItems() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item, index) => (
        <Fragment key={item.value}>
          <li
            className={`rounded-lg px-3 py-2 ${
              pathname === item.value ? 'border border-primary bg-muted text-accent-foreground' : 'text-foreground'
            }`}
          >
            <Link
              href={item.value}
              className="relative flex items-center justify-center text-base font-medium transition-colors hover:text-primary md:gap-x-2"
            >
              <item.icon size={20} />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          </li>
          {index === 0 && (
            <Separator role="listitem" orientation="vertical" className="mx-3 h-6 border-l border-gray-300" />
          )}
        </Fragment>
      ))}
    </>
  );
}
