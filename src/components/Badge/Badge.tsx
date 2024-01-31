import { cn } from '@/lib/utils';

type BadgeProps = {
  className?: string;
};

export default function Badge({
  className,
  children,
}: React.PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={cn(
        'whitespace-nowrap rounded-full bg-primary px-[8px] py-[4px] text-center text-xs',
        className,
      )}
    >
      {children}
    </span>
  );
}
