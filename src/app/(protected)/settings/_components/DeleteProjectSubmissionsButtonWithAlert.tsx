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

export default function DeleteProjectSubmissionsButtonWithAlert() {
  const supabaseBrowserClient = createSupabaseBrowserClient();

  const clearProjectSubmissions = async () => {
    try {
      const {
        data: { user },
      } = await supabaseBrowserClient.auth.getUser();

      if (user) {
        await supabaseBrowserClient
          .from('project_submissions')
          .delete()
          .eq('user_id', user.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[200px] hover:border-destructive hover:text-destructive active:border-destructive"
        >
          Clear Project Submissions
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Clear Project Submissions</AlertDialogTitle>
          <AlertDialogDescription>
            This will clear all the project submissions associated with your
            account. This action is irreversible. Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={clearProjectSubmissions}
          >
            Yes, Clear
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
