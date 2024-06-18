import Link from 'next/link';
import Heading from '../Heading';
import { BanknoteIcon, GemIcon } from 'lucide-react';
import { SpecialItem } from '@/types/Guides';

export default function GuideSpecialItem({
  title,
  link,
  description,
  author,
  isRecommended = false,
  isPaid = false,
  isCourseItem = false,
}: SpecialItem) {
  return (
    <div className="not-prose flex justify-between gap-2 rounded bg-card p-2">
      <div className="flex grow flex-col gap-2">
        <div className="flex items-start justify-between gap-1">
          <Link
            prefetch={false}
            className="underline underline-offset-2"
            href={link}
          >
            <Heading variant="h4">{title}</Heading>
          </Link>
          {isCourseItem && (
            <div className="flex flex-wrap justify-end gap-2 text-sm">
              {isRecommended && (
                <span className="flex items-center gap-1 bg-primary p-1">
                  <GemIcon size={16} /> Recommended
                </span>
              )}
              {isPaid ? (
                <span className="flex items-center gap-1 bg-hard p-1 uppercase">
                  <BanknoteIcon size={16} /> Paid
                </span>
              ) : (
                <span className="flex items-center gap-1 bg-easy p-1 uppercase">
                  <BanknoteIcon size={16} /> Free
                </span>
              )}
            </div>
          )}
        </div>
        {description && <p className="text-sm text-gray-300">{description}</p>}
        {author && <p className="text-sm">Author: {author}</p>}
      </div>
    </div>
  );
}
