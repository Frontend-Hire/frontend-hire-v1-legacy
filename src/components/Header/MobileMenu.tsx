import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import MobileMenuContainer from './MobileMenuContainer';

export default async function MobileMenu() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return <MobileMenuContainer user={user} />;
}
