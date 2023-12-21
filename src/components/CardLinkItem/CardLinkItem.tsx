import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  link: string;
  title: string;
  icon?: React.ReactNode;
}

export default function CardLinkItem({ link, icon, title }: Props) {
  return (
    <Link
      className="flex items-center justify-between rounded bg-card p-[10px] hover:bg-card/80"
      href={link}
    >
      <span className="flex items-center gap-[40px]">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
      </span>
      <ChevronRightIcon size={40} />
    </Link>
  );
}
