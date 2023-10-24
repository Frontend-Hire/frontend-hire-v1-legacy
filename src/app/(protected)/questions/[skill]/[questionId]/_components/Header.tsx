import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { ArrowLeftIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';
import SubmitSolutionButton from './SubmitSolutionButton';

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
      <div className="flex items-center gap-4">
        <SubmitSolutionButton />
      </div>
    </header>
  );
}
