import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import ProSignInButton from './ProSignInButton';
import CheckoutButton from './CheckoutButton';
import { Button } from '../ui/button';
import Link from 'next/link';
import { checkIsProUser } from '@/lib/isProUser';

export default async function BecomeProButton() {
  const supabase = createSupabaseServerClient();

  const [userData, isProUser] = await Promise.all([
    supabase.auth.getUser(),
    checkIsProUser(),
  ]);

  const user = userData.data?.user;

  if (isProUser) {
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
