import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import HeaderLogo from '@/components/HeaderLogo';
import { ListIcon } from 'lucide-react';
import Link from 'next/link';
// import SubmitSolutionButton from './SubmitSolutionButton';
// import ReportBugButtonWithDialog from './ReportBugButtonWithDialog';

export default function Header() {
  return (
    <header className="flex h-[40px] items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <Tooltip title={`Back to all projects`}>
          <Button className="rounded-t-none" size="icon" asChild>
            <Link href={`/projects`}>
              <ListIcon />
            </Link>
          </Button>
        </Tooltip>
      </div>
      <Button asChild className="rounded-t-none">
        <Link href="/dashboard">
          <HeaderLogo />
        </Link>
      </Button>
      <div className="flex items-center gap-4">
        {/* <ReportBugButtonWithDialog />
        <SubmitSolutionButton /> */}
      </div>
    </header>
  );
}
