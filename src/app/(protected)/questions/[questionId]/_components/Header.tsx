import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import HeaderLogo from '@/components/HeaderLogo';
import { ArrowLeftIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';
import SubmitSolutionButton from './SubmitSolutionButton';
import ReportBugButtonWithDialog from './ReportBugButtonWithDialog';

export default function Header() {
  return (
    <header className="flex h-[40px] items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <Tooltip title="Back to Questions">
          <Button
            className="rounded-t-none bg-card hover:bg-card/90 active:bg-card/80"
            size="icon"
            asChild
          >
            <Link href="/questions">
              <ListIcon />
            </Link>
          </Button>
        </Tooltip>
      </div>

      <Link href="/questions" className="max-xs:hidden">
        <HeaderLogo />
      </Link>

      <div className="flex items-center gap-4">
        <ReportBugButtonWithDialog />
        <SubmitSolutionButton />
      </div>
    </header>
  );
}
