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
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-14 w-full items-center justify-between gap-4 p-2 md:py-2">
        <Link prefetch={false} href={getLogoLink()}>
          <HeaderLogo />
        </Link>

        <MobileMenu user={user} />

        <div className="hidden items-center gap-4 text-sm font-medium sm:flex md:gap-[30px] md:text-base">
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
      </div>
    </header>
  );
}
