'use client';

import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import getSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';

export default function SignOut() {
  const supabaseBrowserClient = getSupabaseBrowserClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabaseBrowserClient.auth.signOut();
    router.replace('/');
    router.refresh();
  };

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
      Sign Out
    </DropdownMenuItem>
  );
}
