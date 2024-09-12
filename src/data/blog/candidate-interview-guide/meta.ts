import authorImg from '@/assets/team/hruthikReddy.webp';
import coverImg from './cover.webp';
import { BlogMeta } from '@/types/Blogs';

export const meta: BlogMeta = {
  title: 'Candidate Interview Guide',
  description:
    'A before, during, and after interview guide for candidates to follow during an interview process.',
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
  publishedOn: '2024-02-13',
  lastUpdated: '2024-02-13',
  isPublished: true,
};
