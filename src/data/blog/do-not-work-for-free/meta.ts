import authorImg from '@/assets/team/hruthikReddyInterviewer.jpeg';
import coverImg from './cover.webp';
import { BlogMeta } from '@/types/Blogs';

export const meta: BlogMeta = {
  title: 'Do not work for free',
  description: 'Instead pay up for some mentorship!',
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
  publishedOn: '2024-08-28',
  lastUpdated: '2024-08-28',
  isPublished: true,
};
