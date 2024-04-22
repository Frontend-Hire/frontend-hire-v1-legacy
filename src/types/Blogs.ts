import { StaticImageData } from 'next/image';

export type BlogMeta = {
  title: string;
  description: string;
  authors: {
    name: string;
    image: StaticImageData;
    linkedIn?: string;
    twitter?: string;
    website?: string;
    github?: string;
  }[];
  cover: StaticImageData;
  publishedOn: string;
  lastUpdated: string;
  isPublished?: boolean;
};
