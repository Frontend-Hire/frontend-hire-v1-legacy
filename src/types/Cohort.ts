import { StaticImageData } from 'next/image';

export type Cohort = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  isPro: boolean;
  isPublished?: boolean;
  publishedOn?: Date;
  chapters: Record<string, string>;
  isNew?: boolean;
};
