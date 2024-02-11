import MobileMenu from '@/components/Header/MobileMenu';
import HeaderLogo from '@/components/HeaderLogo';
import Link from 'next/link';
import CTA from './CTA';
import CustomNavigationMenu from '@/components/CustomNavigationMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-[20px] border-b border-border/40 bg-background/90 p-[10px] backdrop-blur-xl md:px-[40px] md:py-[10px]">
      <Link className="xs:" href="/">
        <HeaderLogo />
      </Link>

      <MobileMenu isLandingPage />

      <div className="hidden items-center gap-[20px] text-sm font-medium sm:flex md:gap-[30px] md:text-base">
        <CustomNavigationMenu />
        <CTA label="Practice Now" />
      </div>
    </header>
  );
}
