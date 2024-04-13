import { cn } from '@/lib/utils';

export default function Steps({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'fh-steps mb-12 ml-4 border-l border-gray-200 pl-6',
        'border-neutral-800 [counter-reset:step]',
        className,
      )}
    >
      {children}
    </div>
  );
}
