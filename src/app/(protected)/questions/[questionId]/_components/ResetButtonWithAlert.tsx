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
import { Meta } from '@/types/mdx';
import { useSandpack } from '@codesandbox/sandpack-react';
import { RotateCcwIcon } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ResetButtonWithAlert() {
  const { questionId } = useParams<{
    questionId: string;
  }>();
  const {
    sandpack: { updateFile },
  } = useSandpack();

  const reset = () => {
    try {
      const { meta } = require(`@/data/questions/${questionId}/prompt.mdx`) as {
        meta: Meta;
      };

      const metaDeepCopy = structuredClone(meta);
      if (metaDeepCopy.files) {
        updateFile(metaDeepCopy.files);
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
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={reset}
          >
            Yes, reset
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
