import authorImg from '@/assets/team/hruthikReddy.webp';
import coverImg from './cover.webp';
import { BlogMeta } from '@/types/Blogs';

export const meta: BlogMeta = {
  title: 'Major Update - 1: Journey So Far',
  description:
    'What started as a prototype has grown into a full fledged brand.',
  authors: [
    {
      name: 'Hruthik Reddy',
      image: authorImg,
      linkedIn: 'https://www.linkedin.com/in/yarala-hruthik-reddy/',
      twitter: 'https://twitter.com/thisisyhr',
      website: 'https://www.iamyhr.com/',
      github: 'https://github.com/yaralahruthik',
    },
  ],
  cover: coverImg,
  publishedOn: '2024-06-20',
  lastUpdated: '2024-06-20',
  isPublished: true,
};
