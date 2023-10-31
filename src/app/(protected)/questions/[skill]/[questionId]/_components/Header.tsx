import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { ArrowLeftIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';
import SubmitSolutionButton from './SubmitSolutionButton';
import ReportBugButtonWithDialog from './ReportBugButtonWithDialog';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';

interface Props {
  skill: string;
}

export default function Header({ skill }: Props) {
  return (
    <header className="flex h-[40px] items-center justify-between">
      <div className="flex items-center gap-4">
        <Tooltip title={`Back to ${skill} questions`}>
          <Button className="rounded-t-none" size="icon" asChild>
            <Link href={`/questions/${skill}`}>
              <ArrowLeftIcon />
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title={`All Questions`}>
          <Button className="rounded-t-none" size="icon" asChild>
            <Link href="/questions">
              <ListIcon />
            </Link>
          </Button>
        </Tooltip>
      </div>
      <Button asChild className="rounded-t-none">
        <Link href="/">
          <Image
            priority
            src={Logo}
            className="h-[32px] w-full sm:h-[40px]"
            alt="Frontend Hire"
          />
        </Link>
      </Button>
      <div className="flex items-center gap-4">
        <ReportBugButtonWithDialog />
        <SubmitSolutionButton />
      </div>
    </header>
  );
}
