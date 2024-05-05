import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

type FooterProps = {
  allPages: string[][];
  currentPage: string;
  lastUpdated?: string;
};

export default function Footer({
  allPages,
  currentPage,
  lastUpdated,
}: FooterProps) {
  const getLastUpdated = () => {
    if (!lastUpdated) {
      return;
    }

    const date = new Date(lastUpdated);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPrevPage = () => {
    const index = allPages.findIndex((page) => page[0] === currentPage);

    if (index === 0) {
      return;
    }

    return allPages[index - 1];
  };

  const getNextPage = () => {
    const index = allPages.findIndex((page) => page[0] === currentPage);

    if (index === allPages.length - 1) {
      return;
    }

    return allPages[index + 1];
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {getLastUpdated() && (
        <p className="text-right text-xs text-muted">
          Last updated on <time dateTime={lastUpdated}>{getLastUpdated()}</time>
        </p>
      )}
      <hr className="h-0.5 bg-muted" />
      <div className="flex justify-between">
        {getPrevPage() ? (
          <Button className="text-xl text-white" variant="link" asChild>
            <Link prefetch={false} href={getPrevPage()![0]}>
              <ChevronLeftIcon />
              Prev
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {getNextPage() ? (
          <Button className="text-xl text-white" variant="link" asChild>
            <Link prefetch={false} href={getNextPage()![0]}>
              Next <ChevronRightIcon />
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
