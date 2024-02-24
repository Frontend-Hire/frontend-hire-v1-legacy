import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';
import Link from 'next/link';
import HeaderLogo from '../HeaderLogo';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import CustomNavigationMenu from '../CustomNavigationMenu';
import MobileMenu from './MobileMenu';

export default async function Header() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  const getLogoLink = () => {
    return '/';
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-[20px] border-b border-border/40 bg-background/90 p-[10px] backdrop-blur-xl md:px-[40px] md:py-[10px]">
      <Link href={getLogoLink()}>
        <HeaderLogo />
      </Link>

      <MobileMenu user={user} />

      <div className="hidden items-center gap-[20px] text-sm font-medium sm:flex md:gap-[30px] md:text-base">
        <CustomNavigationMenu />
        {user ? (
          <AvatarDropdown
            picture={user.user_metadata.picture}
            name={user.user_metadata.name}
          />
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
}
