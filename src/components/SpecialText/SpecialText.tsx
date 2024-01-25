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
    <strong
      className={cn(
        'rounded-sm bg-primary px-0.5',
        isLink ? 'underline' : '',
        className,
      )}
    >
      {children}
    </strong>
  );
}
