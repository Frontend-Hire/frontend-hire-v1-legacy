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
import { useQuestionData } from '../_context/QuestionDataProvider';

export default function ResetButtonWithAlert() {
  const {
    originalMeta: { files },
  } = useQuestionData();

  const {
    sandpack: { updateFile },
  } = useSandpack();

  const reset = () => {
    try {
      if (files) {
        updateFile(files);
      }
    } catch (e) {
      console.log(e);
    }
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
            <Button variant="destructive">Yes, reset</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
