import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';
import Link from 'next/link';
import HeaderLogo from '../HeaderLogo';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function Header() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  const getLogoLink = () => {
    if (session) return '/';

    return '/';
  };

  return (
    <header className="flex justify-between border-b p-[10px] shadow-sm md:px-[40px] md:py-[10px]">
      <Link href={getLogoLink()}>
        <HeaderLogo />
      </Link>
      <div className="flex items-center gap-[20px] text-sm font-medium md:gap-[40px] md:text-base">
        <Link
          className="transition-all duration-300 hover:text-primary"
          href="/questions"
        >
          Questions
        </Link>
        <Link
          className="transition-all duration-300 hover:text-primary"
          href="/projects"
        >
          Projects
        </Link>
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
