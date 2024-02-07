import Link from 'next/link';
import { Badge } from '../ui/badge';

type CardLinkItemProps =
  | {
      type: 'link';
      link: string;
      title: React.ReactNode;
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
    }
  | {
      type: 'comingSoon';
      title: React.ReactNode;
      leftIcon?: React.ReactNode;
    };

export default function CardLinkItem(props: CardLinkItemProps) {
  const { title, leftIcon } = props;

  if (props.type === 'comingSoon') {
    return (
      <div className="flex items-center justify-between rounded bg-card p-[10px] opacity-60 hover:bg-card/80">
        <span className="flex items-center gap-[40px]">
          {leftIcon}
          <h3 className="flex items-center gap-[10px] text-2xl font-bold">
            {title}
            <Badge>Coming Soon</Badge>
          </h3>
        </span>
      </div>
    );
  }

  return (
    <Link
      className="flex items-center justify-between rounded bg-card p-[10px] hover:bg-card/80"
      href={props.link}
    >
      <span className="flex items-center gap-[40px]">
        {leftIcon}
        <h3 className="flex items-center gap-[10px] text-2xl font-bold">
          {title}
        </h3>
      </span>
      {props.rightIcon}
    </Link>
  );
}
