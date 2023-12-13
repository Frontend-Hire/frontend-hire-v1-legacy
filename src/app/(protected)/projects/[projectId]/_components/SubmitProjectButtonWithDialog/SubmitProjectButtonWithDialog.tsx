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
import { Label } from '@/components/ui/label';
import createSupabaseBrowserClient from '@/lib/supabase/supabaseBrowserClient';
import { useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import SubmissionConfetti from './SubmissionConfetti';

interface Props {
  githubLink?: string;
  liveLink?: string;
}

export default function SubmitProjectButtonWithDialog({
  githubLink = '',
  liveLink = '',
}: Props) {
  const { projectId } = useParams<{
    projectId: string;
  }>();
  const [open, setOpen] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [localGithubLink, setLocalGithubLink] = React.useState(githubLink);
  const [localLiveLink, setLocalLiveLink] = React.useState(liveLink);

  const supabaseBrowserClient = createSupabaseBrowserClient();

  const handleGithubLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalGithubLink(e.target.value);
  };

  const handleLiveLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalLiveLink(e.target.value);
  };

  const onSubmitProject = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const payload: {
        id?: number;
        project_id: string;
        github_link: string;
        live_link?: string;
      } = {
        project_id: projectId,
        live_link: localLiveLink.trim(),
        github_link: localGithubLink.trim(),
        id: +(sessionStorage.getItem('projectSubmissionId') || ''),
      };

      const { data } = await supabaseBrowserClient
        .from('project_submissions')
        .upsert(payload)
        .select('id')
        .limit(1)
        .maybeSingle();

      if (data) {
        sessionStorage.setItem('projectSubmissionId', `${data.id}`);
      }

      setOpen(false);
      setShowConfetti(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="rounded-t-none bg-green-600 hover:bg-green-700">
            Submit Project
          </Button>
        </DialogTrigger>
        <DialogContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Submit Project</DialogTitle>
            <DialogDescription>
              Submit the project links here. This will later be used to create
              your hiring profile.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmitProject} className="grid gap-2">
            <div className="grid gap-2 py-1">
              <Label htmlFor="github">GitHub Link</Label>
              <p className="text-xs text-muted">
                Be sure to include good Readme doc in the repo.
              </p>
              <Input
                value={localGithubLink}
                onChange={handleGithubLink}
                id="github"
                type="url"
                name="github"
                required
                placeholder="GitHub Repo URL"
              />
            </div>
            <div className="grid gap-2 py-1">
              <Label htmlFor="liveLink">Live Link (Optional)</Label>
              <p className="text-xs text-muted">
                Use Vercel, Netlify or your favorite hosting platform to host
                the project.
              </p>
              <Input
                value={localLiveLink}
                onChange={handleLiveLink}
                id="liveLink"
                name="liveLink"
                type="url"
                placeholder="Project Live Link"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-green-600 hover:bg-green-600">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {showConfetti && (
        <SubmissionConfetti onClose={() => setShowConfetti(false)} />
      )}
    </>
  );
}
