'use client';

import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(
  () => import('@/components/general/ThemeSwitcher'),
  { ssr: false },
);

export const ClientThemeSwitcher = () => {
  return <ThemeSwitcher />;
};
