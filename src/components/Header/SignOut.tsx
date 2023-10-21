'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '../ui/dropdown-menu';

export default function SignOut() {
  const supabaseBrowserClient = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabaseBrowserClient.auth.signOut();
    router.refresh();
  };

  return (
    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
      Sign Out
    </DropdownMenuItem>
  );
}
