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
import { BugIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';

export default function ReportBugButtonWithDialog() {
  const { projectId } = useParams<{
    projectId: string;
  }>();
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState('');

  const supabaseBrowserClient = createSupabaseBrowserClient();

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    setError('');
  };

  const onReportBug = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (description.trim().length < 12) {
        setError('Error: Need more information!');
        return;
      }

      await supabaseBrowserClient.from('project_bug_submissions').insert({
        project_id: projectId,
        description: description.trim(),
      });

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
            What went wrong? Kindly provide as much detail as possible.
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
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
