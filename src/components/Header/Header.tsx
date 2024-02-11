import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';
import Link from 'next/link';
import HeaderLogo from '../HeaderLogo';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import CustomNavigationMenu from '../CustomNavigationMenu';

export default async function Header() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const getLogoLink = () => {
    return '/';
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-[20px] border-b border-border/40 bg-background p-[10px] md:px-[40px] md:py-[10px]">
      <Link className="xs:" href={getLogoLink()}>
        <HeaderLogo />
      </Link>
      <div className="flex items-center gap-[20px] text-sm font-medium md:gap-[30px] md:text-base">
        <CustomNavigationMenu />
        {session ? (
          <AvatarDropdown
            picture={session.user.user_metadata.picture}
            name={session.user.user_metadata.name}
          />
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
}
