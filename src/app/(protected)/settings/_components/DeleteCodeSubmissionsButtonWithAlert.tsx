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

export default function DeleteCodeSubmissionsButtonWithAlert() {
  const supabaseBrowserClient = createSupabaseBrowserClient();
  const clearCodeSubmissions = async () => {
    try {
      const {
        data: { user },
      } = await supabaseBrowserClient.auth.getUser();

      if (user) {
        await supabaseBrowserClient
          .from('code_history')
          .delete()
          .eq('user_id', user.id);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        throw error;
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[200px] hover:border-destructive hover:text-destructive active:border-destructive"
        >
          Clear Code Submissions
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Clear Code Submissions</AlertDialogTitle>
          <AlertDialogDescription>
            This will clear all the code submissions associated with your
            account. This action is irreversible. Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={clearCodeSubmissions}
          >
            Yes, Clear
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
