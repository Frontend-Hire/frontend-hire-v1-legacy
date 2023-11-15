import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { useSandpack } from '@codesandbox/sandpack-react';
import { BugIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { Input } from '@/components/ui/input';

export default function ReportBugButtonWithDialog() {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState('');
  const [sandboxLink, setSandboxLink] = React.useState('');
  const [error, setError] = React.useState('');

  const supabaseBrowserClient = createClientComponentClient<Database>();

  const { sandpack } = useSandpack();
  const { visibleFiles, files } = sandpack;

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    setError('');
  };

  const handleSandboxLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSandboxLink(e.target.value);
  };

  const onReportBug = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (description.trim().length < 12) {
        setError('Error: Need more information!');
        return;
      }

      const { data: bugData } = await supabaseBrowserClient
        .from('bug_submissions')
        .insert({
          question_id: sessionStorage.getItem('question_id')!,
          description: description.trim(),
          sandbox_link: sandboxLink,
        })
        .select('id')
        .single();

      if (bugData) {
        const bugFilesPayload: {
          file_name: string;
          code: string;
          bug_id: number;
        }[] = [];
        const editableVisibleFiles = visibleFiles.filter(
          (file) => !files[file].readOnly,
        );

        editableVisibleFiles.forEach((visibleFile) => {
          bugFilesPayload.push({
            file_name: visibleFile,
            code: files[visibleFile].code,
            bug_id: bugData.id,
          });
        });

        await supabaseBrowserClient.from('bug_files').insert(bugFilesPayload);
      }

      setOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip title="Report Bug">
        <DialogTrigger asChild>
          <Button size="icon" className="rounded-t-none">
            <BugIcon />
            <VisuallyHidden>Report Bug</VisuallyHidden>
          </Button>
        </DialogTrigger>
      </Tooltip>
      <DialogContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Report Bug</DialogTitle>
          <DialogDescription>
            What went wrong? Kindly provide as much detail as possible. No need
            to attach the code, the workspace details are sent automatically!
            Though if possible, you can attach the CodeSandbox link if possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onReportBug} className="grid gap-2">
          <div className="grid gap-2 py-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              value={description}
              onChange={handleDescription}
              id="description"
              name="description"
              required
              placeholder="Kindly provide as much detail as possible!"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
          </div>
          <div className="grid gap-2 py-1">
            <Label htmlFor="sandbox">Sandbox Link (Optional)</Label>
            <Input
              value={sandboxLink}
              onChange={handleSandboxLink}
              id="sandbox"
              name="sandbox"
              placeholder="Kindly provide as much detail as possible!"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
