import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  const thisYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'flex grow items-end justify-center py-0.5 text-center text-xs font-medium text-gray-700',
        className,
      )}
    >
      © Yarala Hruthik Reddy {thisYear}
    </footer>
  );
}
