'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useRouter } from 'next/navigation';

export default function DeleteAccountButtonWithAlert() {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const {
        data: { user },
      } = await supabaseBrowserClient.auth.getUser();
      if (user) {
        await fetch(`${location.origin}/settings/account`, {
          method: 'DELETE',
          body: JSON.stringify({ id: user.id }),
        });
        sessionStorage.clear();
        await supabaseBrowserClient.auth.signOut();
        router.replace('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="min-w-[200px]">
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            This will delete your account and any data related to it. This
            action is irreversible. Are you sure? Pro access will be revoked.
            You will have to contact support to restore your Pro purchase.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={handleDelete}
          >
            Yes, Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
