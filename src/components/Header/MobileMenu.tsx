import getSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import MobileMenuContainer from './MobileMenuContainer';
import { checkIsProUser } from '@/lib/isProUser';

export default async function MobileMenu() {
  const supabaseServerClient = getSupabaseServerClient();

  const [userData, isProUser] = await Promise.all([
    supabaseServerClient.auth.getUser(),
    checkIsProUser(),
  ]);

  const user = userData.data?.user;

  return <MobileMenuContainer user={user} isProUser={isProUser} />;
}
