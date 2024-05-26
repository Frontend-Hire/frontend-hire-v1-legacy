import HeaderLogo from '@/components/HeaderLogo';
import Link from 'next/link';
import CTA from './CTA';
import dynamic from 'next/dynamic';

const CustomNavigationMenu = dynamic(
  () => import('@/components/CustomNavigationMenu'),
);
const StaticMobileMenu = dynamic(
  () => import('@/components/Header/StaticMobileMenu'),
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-14 w-full items-center justify-between gap-4 p-2 md:py-2">
        <Link prefetch={false} href="/">
          <HeaderLogo />
        </Link>

        <StaticMobileMenu />

        <div className="hidden items-center gap-4 text-sm font-medium sm:flex md:gap-[30px] md:text-base">
          <CustomNavigationMenu />
          <CTA label="Practice Now" />
        </div>
      </div>
    </header>
  );
}
