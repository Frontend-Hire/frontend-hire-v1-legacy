import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import ProSignInButton from './ProSignInButton';
import CheckoutButton from './CheckoutButton';

export default async function BecomeProButton() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? <CheckoutButton /> : <ProSignInButton />;
}
