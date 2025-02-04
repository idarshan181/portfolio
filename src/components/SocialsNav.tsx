'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

import { AppConfig } from '@/utils/AppConfig';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

const CustomLink = ({ href, className, children, ...props }: { href: string } & React.ComponentPropsWithoutRef<'a'>) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <Link
        href={href}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
          isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    </NavigationMenuLink>
  );
};

export default function SocialsNav() {
  const t = useTranslations('RootLayout');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-lg px-2 py-1 text-lg font-medium text-foreground">
            {t('social_link')}
            {' '}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 text-primary lg:grid-cols-[1fr]">
              <li>
                <CustomLink href={AppConfig.linkedin}>LinkedIn </CustomLink>
              </li>
              <li>
                <CustomLink href={AppConfig.github}>GitHub</CustomLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
