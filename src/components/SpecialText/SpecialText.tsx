import { cn } from '@/lib/utils';

type SpecialTextProps = {
  className?: string;
  isLink?: boolean;
};

export default function SpecialText({
  children,
  className,
}: React.PropsWithChildren<SpecialTextProps>) {
  return (
    <strong className={cn('font-bold text-[#FF5CF2]', className)}>
      {children}
    </strong>
  );
}
