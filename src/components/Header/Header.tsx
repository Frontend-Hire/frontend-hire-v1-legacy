import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';
import Menu from './Menu';
import Link from 'next/link';
import HeaderLogo from '../HeaderLogo';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function Header() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const getLogoLink = () => {
    if (session) return '/dashboard';

    return '/';
  };

  return (
    <header className="mb-2 flex h-[80px] w-full flex-col text-primary-foreground [&>*]:px-4">
      <div className="flex h-[40px] items-center justify-between bg-primary">
        <Link href={getLogoLink()}>
          <HeaderLogo />
        </Link>
        <div className="flex items-center">
          {session ? (
            <AvatarDropdown
              picture={session.user.user_metadata.picture}
              name={session.user.user_metadata.name}
            />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
      <Menu />
    </header>
  );
}
