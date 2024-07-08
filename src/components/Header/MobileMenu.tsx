import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import MobileMenuContainer from './MobileMenuContainer';
import { checkIsProUser } from '@/lib/isProUser';
import { getProUserMainNavLinks, getUserMainNavLinks } from '@/config/site';

export default async function MobileMenu() {
  const supabaseServerClient = createSupabaseServerClient();

  const [userData, isProUser] = await Promise.all([
    supabaseServerClient.auth.getUser(),
    checkIsProUser(),
  ]);

  const user = userData.data?.user;

  return <MobileMenuContainer user={user} isProUser={isProUser} />;
}
