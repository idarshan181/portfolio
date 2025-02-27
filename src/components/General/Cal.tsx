'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { Button } from '../ui/button';

type CalProps = React.ComponentProps<'button'>;

export default function Cal({ className = '', style, ...props }: CalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#2563eb' },
          dark: { 'cal-brand': '#fafafa' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      data-cal-namespace="30min"
      data-cal-link="idarshan18/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      style={style}
      className={className}
      {...props}
    >
      <HiOutlineCalendarDays size={24} />
      {' '}
      Schedule a call
      <FaChevronRight />
    </Button>
  );
}
