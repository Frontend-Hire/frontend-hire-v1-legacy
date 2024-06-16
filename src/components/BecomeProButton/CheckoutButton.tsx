import { getPurchasePower } from '@/lib/getPurchasePower';
import RazorPayCheckoutButton from './RazorPayCheckoutButton';
import LemonSqueezyCheckoutButton from './LemonSqueezyCheckoutButton';
import { User } from '@supabase/supabase-js';

type CheckoutButtonProps = {
  user: User;
};

export default async function CheckoutButton({ user }: CheckoutButtonProps) {
  const { name } = await getPurchasePower();

  if (name === 'India') {
    return <RazorPayCheckoutButton user={user} />;
  }

  return <LemonSqueezyCheckoutButton user={user} />;
}
