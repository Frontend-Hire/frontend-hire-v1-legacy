'use client';

import React from 'react';
import Link from 'next/link';
import { BANNER_CONFIG } from '@/app/quick-config';

type CourseBannerProps = {
  isRootTop?: boolean;
};

export default function CourseBanner({ isRootTop }: CourseBannerProps) {
  if (BANNER_CONFIG.show === false) return null;

  if (isRootTop) {
    return <RootTopBanner />;
  }

  return (
    <div className="flex items-center gap-[5px] bg-primary/40 px-[20px] py-[5px]">
      <span className="flex grow flex-col gap-[4px] text-center">
        <span>{BANNER_CONFIG.text}</span>
        <Link
          className="underline"
          target="_blank"
          href={BANNER_CONFIG.cta.href}
        >
          {BANNER_CONFIG.cta.text}
        </Link>
      </span>
    </div>
  );
}

function RootTopBanner() {
  const [banner, setBanner] = React.useState<'open' | 'close'>(
    () => (sessionStorage.getItem('banner') as 'open' | 'close') ?? 'open',
  );

  if (banner === 'close') return null;

  const closeBanner = () => {
    sessionStorage.setItem('banner', 'close');
    setBanner('close');
  };

  return (
    <div className="flex items-center gap-[5px] bg-primary/40 px-[20px] py-[5px] text-xs sm:text-sm">
      <span className="flex grow flex-col gap-[4px] text-center">
        <span>{BANNER_CONFIG.text}</span>
        <Link
          className="underline"
          target="_blank"
          href={BANNER_CONFIG.cta.href}
        >
          {BANNER_CONFIG.cta.text}
        </Link>
      </span>
      <button onClick={closeBanner}>X</button>
    </div>
  );
}
