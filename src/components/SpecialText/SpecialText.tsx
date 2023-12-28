import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  isLink?: boolean;
}

export default function SpecialText({
  children,
  isLink = false,
  className,
}: Props) {
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
