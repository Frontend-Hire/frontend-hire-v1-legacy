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
    <header className="container sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b border-border/40 bg-background/90 p-2 backdrop-blur-xl md:py-2">
      <Link href="/">
        <HeaderLogo />
      </Link>

      <StaticMobileMenu />

      <div className="hidden items-center gap-4 text-sm font-medium sm:flex md:gap-[30px] md:text-base">
        <CustomNavigationMenu />
        <CTA label="Practice Now" />
      </div>
    </header>
  );
}
