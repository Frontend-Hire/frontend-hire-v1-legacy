import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type LocalInstructionsProps = {
  link: string;
};

export default function LocalInstructions({ link }: LocalInstructionsProps) {
  return (
    <div className="space-y-2 rounded bg-card p-4 text-card-foreground">
      <p>
        This question can only be solved in your local environment. We want to
        give you the best learning experience possible which unfortunately is
        not possible in the browser.
      </p>
      <div className="flex items-center justify-between">
        <Link
          href={link}
          target="_blank"
          prefetch={false}
          className="text-link underline underline-offset-2"
        >
          Repository Link
        </Link>
        <Dialog>
          <DialogTrigger className="text-link underline underline-offset-2">
            Show Instructions
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Local Instructions</DialogTitle>
              <DialogDescription>
                In case of any issues, contact us on{' '}
                <Link
                  className="text-link underline underline-offset-2"
                  href="https://discord.gg/DWAVqksVtx"
                  prefetch={false}
                >
                  Discord
                </Link>
                .
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
