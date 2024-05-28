import { StaticImageData } from 'next/image';

type Category = 'React' | 'Svelte' | 'Next.js';

export type Course = {
  id: string;
  title: string;
  category?: Category;
  description: string;
  image: StaticImageData;
  link: string;
  isPro: boolean;
  isVideoAvailable?: boolean;
  isPublished?: boolean;
  chapters: Record<string, string>;
};
