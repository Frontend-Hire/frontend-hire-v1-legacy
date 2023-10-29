import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';
import Menu from './Menu';

export default async function Header() {
  const supabaseServerClient = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return (
    <header className="mb-2 flex h-[80px] w-full flex-col text-primary-foreground [&>*]:px-4">
      <div className="flex h-[40px] items-center justify-between bg-primary">
        <div>Logo</div>
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
