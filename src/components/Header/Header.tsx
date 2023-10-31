import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';
import Menu from './Menu';
import Logo from '@/assets/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const supabaseServerClient = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return (
    <header className="mb-2 flex h-[80px] w-full flex-col text-primary-foreground [&>*]:px-4">
      <div className="flex h-[40px] items-center justify-between bg-primary">
        <Link href="/">
          <Image
            priority
            src={Logo}
            className="h-[32px] w-full sm:h-[40px]"
            alt="Frontend Hire"
          />
        </Link>
        <div className="flex items-center">
          {user ? (
            <AvatarDropdown
              picture={user.user_metadata.picture}
              name={user.user_metadata.name}
            />
          ) : (
            <SignInButton label="Sign In" />
          )}
        </div>
      </div>
      <Menu />
    </header>
  );
}
