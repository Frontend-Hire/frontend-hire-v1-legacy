import authorImg from '@/assets/team/hruthikReddy.webp';
import coverImg from './cover.webp';
import { BlogMeta } from '@/types/Blogs';

export const meta: BlogMeta = {
  title: 'Learning React Guide',
  description: 'Our compilation of best resources out there for learning React',
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
  publishedOn: '2024-01-20',
  lastUpdated: '2024-04-21',
  isPublished: true,
};
