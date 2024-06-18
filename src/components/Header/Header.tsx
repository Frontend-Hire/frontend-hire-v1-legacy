import Link from 'next/link';
import HeaderLogo from '../HeaderLogo';
import CustomNavigationMenu from '../CustomNavigationMenu';
import MobileMenu from './MobileMenu';
import React from 'react';
import AvatarContainer from './AvatarContainer';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-14 w-full items-center justify-between gap-4 p-2 md:py-2">
        <Link prefetch={false} href="/">
          <HeaderLogo />
        </Link>
        <React.Suspense>
          <MobileMenu />
        </React.Suspense>

        <div className="md:gap8 hidden items-center gap-4 text-sm font-medium sm:flex md:text-base">
          <CustomNavigationMenu />
          <React.Suspense>
            <AvatarContainer />
          </React.Suspense>
        </div>
      </div>
    </header>
  );
}
