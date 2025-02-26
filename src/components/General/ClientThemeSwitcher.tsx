'use client';

import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(() => import('@/components/General/ThemeSwitcher'), { ssr: false });

export const ClientThemeSwitcher = () => {
  return <ThemeSwitcher />;
};
