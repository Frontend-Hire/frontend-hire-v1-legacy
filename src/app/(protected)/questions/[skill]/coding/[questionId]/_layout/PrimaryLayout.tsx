import { cn } from '@/lib/utils';

type PrimaryLayoutProps = {
  header: React.ReactNode;
  isContainer?: boolean;
};

export default function PrimaryLayout({
  header,
  children,
  isContainer = false,
}: React.PropsWithChildren<PrimaryLayoutProps>) {
  return (
    <div
      className={cn('flex h-full flex-col px-2', isContainer && 'container')}
    >
      {header}
      <div className="mt-2 flex grow flex-col overflow-hidden rounded">
        {children}
      </div>
    </div>
  );
}
