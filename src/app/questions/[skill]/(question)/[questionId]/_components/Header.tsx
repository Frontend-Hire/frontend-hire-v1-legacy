import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { ArrowLeftIcon, ListIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  skill: string;
}

export default function Header({ skill }: Props) {
  return (
    <header className="flex h-[40px] items-center gap-4">
      <Tooltip title={`Back to ${skill} questions`}>
        <Button size="icon" asChild>
          <Link href={`/questions/${skill}`}>
            <ArrowLeftIcon />
          </Link>
        </Button>
      </Tooltip>
      <Tooltip title={`All Questions`}>
        <Button size="icon" asChild>
          <Link href="/questions">
            <ListIcon />
          </Link>
        </Button>
      </Tooltip>
    </header>
  );
}
