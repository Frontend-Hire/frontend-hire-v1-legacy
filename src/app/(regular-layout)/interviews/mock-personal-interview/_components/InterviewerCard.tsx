import { Badge } from '@/components/ui/badge';
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
  isFree?: boolean;
};

export default function InterviewerCard({
  name,
  headline,
  badge,
  avatar,
  description,
  linkedIn,
  bookingLink,
  isFree,
}: InterviewerCardProps) {
  return (
    <article className="flex min-h-full scale-95 flex-col justify-between gap-2 rounded bg-card p-4 transition-all hover:scale-100">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <Image
            priority
            src={avatar}
            alt={name}
            className="h-16 w-16 rounded-full md:h-20 md:w-20"
          />
          <div className="flex flex-col justify-center gap-1">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm font-medium text-gray-300">{headline}</p>
          </div>
        </div>
      </div>
      <p className="grow text-sm font-medium leading-5">{description}</p>
      <div className="flex flex-wrap gap-2">
        <Badge className="text-center">{badge}</Badge>
        {isFree && (
          <Badge className="bg-easy text-center hover:bg-easy">
            Offers Free Interviews
          </Badge>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Link
          prefetch={false}
          className="hover:text-[#2867B2]"
          href={linkedIn}
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Button asChild>
          <Link prefetch={false} target="_blank" href={bookingLink}>
            Book Interview <ExternalLinkIcon className="ml-1" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
