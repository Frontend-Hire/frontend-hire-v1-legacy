import authorImg from '@/assets/team/hruthikReddy.webp';
import coverImg from './cover.webp';
import { BlogMeta } from '@/types/Blogs';

export const meta: BlogMeta = {
  title: 'Interviewer Interview Guide',
  description:
    'As an interviewer, you are responsible for making the candidate feel comfortable and getting the best out of them. This guide will help you to prepare for the interview and to make the candidate feel comfortable.',
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
  publishedOn: '2024-03-10',
  lastUpdated: '2024-03-10',
  isPublished: true,
};
