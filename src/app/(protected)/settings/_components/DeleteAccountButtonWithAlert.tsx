import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function DeleteAccountButtonWithAlert() {
  const supabaseBrowserClient = createClientComponentClient();

  const deleteAccount = async () => {
    try {
      console.log('Deleted Account');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button variant="destructive" className="min-w-[200px]">
      Delete Account
    </Button>
  );
}
