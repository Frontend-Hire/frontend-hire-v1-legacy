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
import Tooltip from '@/components/ui/tooltip';
import { useSandpack } from '@codesandbox/sandpack-react';
import { RotateCcwIcon } from 'lucide-react';

export default function ResetButtonWithAlert() {
  const {
    sandpack: { resetAllFiles },
  } = useSandpack();

  const reset = () => {
    resetAllFiles();
  };

  return (
    <AlertDialog>
      <Tooltip title="Reset Workspace">
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-none">
            <RotateCcwIcon className="text-white" />
          </Button>
        </AlertDialogTrigger>
      </Tooltip>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset Code Editor</AlertDialogTitle>
          <AlertDialogDescription>
            This will reset your code editor. Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={reset} variant="destructive">
              Yes, reset
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
