import { StaticImageData } from 'next/image';

export type Course = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  isPro: boolean;
  isVideoAvailable?: boolean;
  isPublished?: boolean;
  chapters: Record<string, string>;
};
