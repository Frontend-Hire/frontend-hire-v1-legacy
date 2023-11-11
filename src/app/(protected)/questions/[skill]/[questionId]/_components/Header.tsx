import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import HeaderLogo from '@/components/HeaderLogo';
import { ArrowLeftIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';
import SubmitSolutionButton from './SubmitSolutionButton';
import ReportBugButtonWithDialog from './ReportBugButtonWithDialog';

interface Props {
  skill: string;
}

export default function Header({ skill }: Props) {
  return (
    <header className="flex h-[40px] items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <Tooltip title={`Back to ${skill} questions`}>
          <Button className="rounded-t-none" size="icon" asChild>
            <Link href={`/questions/${skill}`}>
              <ArrowLeftIcon />
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title="All Questions">
          <Button className="rounded-t-none" size="icon" asChild>
            <Link href="/questions">
              <ListIcon />
            </Link>
          </Button>
        </Tooltip>
      </div>
      <Link href="/" className="max-xs:hidden">
        <HeaderLogo fill="GRAY" />
      </Link>
      <div className="flex items-center gap-4">
        <ReportBugButtonWithDialog />
        <SubmitSolutionButton />
      </div>
    </header>
  );
}
