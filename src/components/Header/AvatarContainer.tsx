import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import AvatarDropdown from './AvatarDropdown';
import SignInButton from '../SignInButton';

export default async function AvatarContainer() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return user ? (
    <AvatarDropdown
      picture={user.user_metadata.picture}
      name={user.user_metadata.name}
    />
  ) : (
    <SignInButton />
  );
}
