import { cn } from '@/lib/utils';

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
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
