import { getPurchasePower } from '@/lib/getPurchasePower';
import RazorPayCheckoutButton from './RazorPayCheckoutButton';
import LemonSqueezyCheckoutButton from './LemonSqueezyCheckoutButton';

export default async function CheckoutButton() {
  const { name } = await getPurchasePower();

  if (name === 'India') {
    return <RazorPayCheckoutButton />;
  }

  return <LemonSqueezyCheckoutButton />;
}
