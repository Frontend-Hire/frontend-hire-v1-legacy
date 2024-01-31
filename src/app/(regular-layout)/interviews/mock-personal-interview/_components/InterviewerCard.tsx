import Badge from '@/components/Badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, LinkedinIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type InterviewerCardProps = {
  name: string;
  headline: string;
  badge: string;
  avatar: StaticImageData;
  description: string;
  linkedIn: string;
  bookingLink: string;
};

export default function InterviewerCard({
  name,
  headline,
  badge,
  avatar,
  description,
  linkedIn,
  bookingLink,
}: InterviewerCardProps) {
  return (
    <article className="flex min-h-full flex-col justify-between gap-[10px] rounded bg-card p-[10px]">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-[10px]">
          <Image
            priority
            src={avatar}
            alt={name}
            className="h-[60px] w-[60px] rounded-full md:h-[80px] md:w-[80px]"
          />
          <div className="flex flex-col justify-center gap-[5px]">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm font-medium text-muted">{headline}</p>
          </div>
        </div>
        <Badge>{badge}</Badge>
      </div>
      <p className="grow text-sm font-medium leading-5">{description}</p>
      <div className="flex items-center justify-between">
        <Link className="hover:text-[#2867B2]" href={linkedIn} target="_blank">
          <LinkedinIcon />
        </Link>
        <Button asChild>
          <Link target="_blank" href={bookingLink}>
            Book Interview <ExternalLinkIcon className="ml-1" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
