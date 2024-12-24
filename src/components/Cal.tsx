'use client';

import { getCalApi } from '@calcom/embed-react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Button } from './ui/button';

type CalProps = React.ComponentProps<'button'>;

export default function Cal({ className = '', style, ...props }: CalProps) {
  const t = useTranslations('Contact');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { cssVarsPerTheme: { light: { 'cal-brand': '#2563eb' }, dark: { 'cal-brand': '#fafafa' } }, hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
  return (
    <Button
      type="button"
      data-cal-namespace="30min"
      data-cal-link="idarshan18/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      style={style}
      className={className}
      {...props}
    >
      {t('contact_details.chat_with_us_title')}
    </Button>
  );
};
