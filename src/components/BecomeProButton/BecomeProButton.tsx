import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import ProSignInButton from './ProSignInButton';
import CheckoutButton from './CheckoutButton';
import { Button } from '../ui/button';
import Link from 'next/link';

export default async function BecomeProButton() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('users')
    .select('has_pro_access')
    .limit(1)
    .single();

  if (data?.has_pro_access) {
    return (
      <Button asChild>
        <Link prefetch={false} href="/pro">
          You are already a Pro member!
        </Link>
      </Button>
    );
  }

  return user ? <CheckoutButton user={user} /> : <ProSignInButton />;
}
