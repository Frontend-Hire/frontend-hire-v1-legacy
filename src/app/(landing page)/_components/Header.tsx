import HeaderLogo from '@/components/HeaderLogo';
import Link from 'next/link';
import CTA from './CTA';
import CustomNavigationMenu from '@/components/CustomNavigationMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-[20px] border-b border-border/40 bg-background p-[10px] md:px-[40px] md:py-[10px]">
      <Link href="/">
        <HeaderLogo />
      </Link>
      <div className="z-[100] flex items-center gap-[20px] text-sm font-medium md:gap-[30px] md:text-base">
        <CustomNavigationMenu />
        <CTA />
      </div>
    </header>
  );
}
