'use client';

import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';

export default function SignOut() {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabaseBrowserClient.auth.signOut();
    router.replace('/');
    router.refresh();
  };

  return (
    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
      Sign Out
    </DropdownMenuItem>
  );
}
