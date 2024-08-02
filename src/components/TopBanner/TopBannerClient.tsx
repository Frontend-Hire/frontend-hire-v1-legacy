'use client';

import { BANNER_CONFIG } from '@/config/site';
import Link from 'next/link';
import React from 'react';

export default function TopBannerClient() {
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
    <div className="flex items-center gap-1 bg-primary/40 px-4 py-1 text-xs sm:text-sm">
      <span className="flex grow flex-col gap-1 text-center">
        <span>{BANNER_CONFIG.text}</span>
        <Link
          prefetch={false}
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
