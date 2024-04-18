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
      <div className="flex items-center justify-between rounded bg-card p-2 opacity-60 hover:bg-card/80">
        <span className="flex items-center gap-4 md:gap-10">
          {leftIcon}
          <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold md:text-2xl">
            {title}
            <Badge className="text-center">Coming Soon</Badge>
          </h3>
        </span>
      </div>
    );
  }

  return (
    <Link
      className="flex items-center justify-between rounded bg-card p-2 hover:bg-card/80"
      href={props.link}
    >
      <span className="flex items-center gap-4 md:gap-10">
        {leftIcon}
        <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold md:text-2xl">
          {title}
        </h3>
      </span>
      {props.rightIcon}
    </Link>
  );
}
