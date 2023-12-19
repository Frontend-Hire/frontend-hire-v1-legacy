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
    <div className="flex justify-between gap-[10px] rounded bg-card p-[10px]">
      <div className="flex grow flex-col gap-[10px]">
        <div className="flex items-start justify-between gap-[5px]">
          <Link className="underline underline-offset-2" href={link}>
            <Heading variant="h4">{title}</Heading>
          </Link>
          {isCourseItem && (
            <div className="flex flex-wrap justify-end gap-[10px] text-sm">
              {isRecommended && (
                <span className="flex items-center gap-[5px] bg-primary p-[5px]">
                  <GemIcon size={16} /> Recommended
                </span>
              )}
              {isPaid ? (
                <span className="flex items-center gap-[5px] bg-hard p-[5px] uppercase">
                  <BanknoteIcon size={16} /> Paid
                </span>
              ) : (
                <span className="flex items-center gap-[5px] bg-easy p-[5px] uppercase">
                  <BanknoteIcon size={16} /> Free
                </span>
              )}
            </div>
          )}
        </div>
        {description && <p className="text-sm text-muted">{description}</p>}
        {author && <p className="text-sm">Author: {author}</p>}
      </div>
    </div>
  );
}
