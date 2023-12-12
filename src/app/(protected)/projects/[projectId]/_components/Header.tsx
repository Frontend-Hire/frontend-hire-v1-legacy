import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import HeaderLogo from '@/components/HeaderLogo';
import { ListIcon, LoaderIcon } from 'lucide-react';
import Link from 'next/link';
import ReportBugButtonWithDialog from './ReportBugButtonWithDialog';
import SubmitProjectButtonWithDialog from './SubmitProjectButtonWithDialog';
import useProjectSubmission from '../_hooks/useProjectSubmission';

export default function Header() {
  const { data } = useProjectSubmission();

  const renderSubmitProjectButton = () => {
    if (data.status == 'loading' || data.status == 'idle') {
      return (
        <Button size="icon">
          <LoaderIcon />
        </Button>
      );
    }

    if (data.status == 'error') {
      return null;
    }

    return (
      <SubmitProjectButtonWithDialog
        githubLink={data.projectSubmission?.github_link}
        liveLink={data.projectSubmission?.live_link}
      />
    );
  };

  return (
    <header className="flex h-[40px] items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <Tooltip title={`Back to all projects`}>
          <Button
            className="rounded-t-none bg-card hover:bg-card/90 active:bg-card/80"
            size="icon"
            asChild
          >
            <Link href={`/projects`}>
              <ListIcon />
            </Link>
          </Button>
        </Tooltip>
      </div>

      <Link href="/" className="max-xs:hidden">
        <HeaderLogo />
      </Link>

      <div className="flex items-center gap-4">
        <ReportBugButtonWithDialog />
        {renderSubmitProjectButton()}
      </div>
    </header>
  );
}
