'use client';

import React from 'react';
import Link from 'next/link';
import { BANNER_CONFIG } from '@/config/site';

type CourseBannerProps = {
  isRootTop?: boolean;
};

export default function CourseBanner({ isRootTop }: CourseBannerProps) {
  if (BANNER_CONFIG.show === false) return null;

  if (isRootTop) {
    return <RootTopBanner />;
  }

  return (
    <div className="flex items-center gap-[5px] bg-primary/40 px-4 py-[5px]">
      <span className="flex grow flex-col gap-1 text-center">
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
  const [banner, setBanner] = React.useState<'open' | 'close' | ''>('');

  React.useEffect(() => {
    const bannerState = sessionStorage.getItem('banner');
    if (bannerState === 'close') {
      setBanner('close');
    } else {
      setBanner('open');
    }
  }, []);

  if (banner !== 'open') return null;

  const closeBanner = () => {
    sessionStorage.setItem('banner', 'close');
    setBanner('close');
  };

  return (
    <div className="flex items-center gap-[5px] bg-primary/40 px-4 py-[5px] text-xs sm:text-sm">
      <span className="flex grow flex-col gap-1 text-center">
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
