'use client';

import { routing, usePathname } from '@/libs/i18nNavigation';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string): void => {
    router.push(`/${value}${pathname}`);
    router.refresh();
  };

  return (

    <Select onValueChange={handleChange} defaultValue={locale} aria-label="lang-switcher">
      <SelectTrigger>
        <SelectValue placeholder={locale}></SelectValue>
      </SelectTrigger>
      <SelectContent className="z-50">
        {routing.locales.map(elt => (
          <SelectItem key={elt} value={elt}>
            {elt.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
