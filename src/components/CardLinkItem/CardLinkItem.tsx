import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

type CardLinkItemProps = {
  link: string;
  title: string;
  icon?: React.ReactNode;
  isBeta?: boolean;
};

export default function CardLinkItem({
  link,
  icon,
  title,
  isBeta,
}: CardLinkItemProps) {
  return (
    <Link
      className="flex items-center justify-between rounded bg-card p-[10px] hover:bg-card/80"
      href={link}
    >
      <span className="flex items-center gap-[40px]">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
      </span>
      <div className="flex items-center gap-[5px]">
        {isBeta && (
          <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">
            Beta
          </span>
        )}
        <ChevronRightIcon size={40} />
      </div>
    </Link>
  );
}
