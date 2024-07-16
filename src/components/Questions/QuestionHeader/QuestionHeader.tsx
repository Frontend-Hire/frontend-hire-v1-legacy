import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import HeaderLogo from '@/components/HeaderLogo';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

type QuestionHeaderProps = {
  leftButtons?: React.ReactNode;
  rightButtons?: React.ReactNode;
};

export default function QuestionHeader({
  leftButtons,
  rightButtons,
}: QuestionHeaderProps) {
  return (
    <header className="flex h-10 items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <Tooltip title={`Back to Questions Home`}>
          <Button
            className="rounded-t-none bg-card hover:bg-card/90 active:bg-card/80"
            size="icon"
            asChild
          >
            <Link href={`/questions`} prefetch={false}>
              <HomeIcon />
            </Link>
          </Button>
        </Tooltip>
        {leftButtons}
      </div>

      <Link href="/questions" className="max-xs:hidden" prefetch={false}>
        <HeaderLogo />
      </Link>

      <div className="flex items-center gap-4">{rightButtons}</div>
    </header>
  );
}
