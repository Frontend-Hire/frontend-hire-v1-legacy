import { User } from '@supabase/supabase-js';

type LemonSqueezyCheckoutButtonProps = {
  user: User;
};

export default function LemonSqueezyCheckoutButton({
  user,
}: LemonSqueezyCheckoutButtonProps) {
  return <div>LemonSqueezyCheckoutButton</div>;
}
