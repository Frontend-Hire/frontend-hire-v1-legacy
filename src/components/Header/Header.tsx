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
    return '/';
  };

  return (
    <header className="grid grid-cols-1 items-center gap-[20px] border-b p-[10px] shadow-sm sm:grid-cols-6 sm:justify-start md:px-[40px] md:py-[10px]">
      <Link className="xs:" href={getLogoLink()}>
        <HeaderLogo />
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-[20px] text-sm font-medium sm:col-span-5 sm:justify-end md:gap-[30px] md:text-base">
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
        <Link
          className="transition-all duration-300 hover:text-primary"
          href="/interviews"
        >
          Interviews
        </Link>
        <Link
          className="transition-all duration-300 hover:text-primary"
          href="/guides"
        >
          Guides
        </Link>
        <Link
          className="transition-all duration-300 hover:text-primary"
          href="/guides"
        >
          Courses
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
