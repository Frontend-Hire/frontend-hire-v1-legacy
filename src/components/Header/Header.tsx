import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';

export default async function Header() {
  const supabaseServerClient = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return (
    <header className="flex h-[40px] items-center justify-between bg-primary px-4 text-primary-foreground">
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
    </header>
  );
}
