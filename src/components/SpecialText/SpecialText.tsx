import { cn } from '@/lib/utils';

type SpecialTextProps = {
  className?: string;
  isLink?: boolean;
};

export default function SpecialText({
  children,
  isLink = false,
  className,
}: React.PropsWithChildren<SpecialTextProps>) {
  return (
    <span
      className={cn(
        'font-bold text-primary',
        isLink ? 'underline' : '',
        className,
      )}
    >
      {children}
    </span>
  );
}
