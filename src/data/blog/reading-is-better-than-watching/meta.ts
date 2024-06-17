import authorImg from '@/assets/team/hruthikReddyInterviewer.jpeg';
import coverImg from './cover.webp';
import { BlogMeta } from '@/types/Blogs';

export const meta: BlogMeta = {
  title: 'Reading is better than watching',
  description: '1 hour of video is equal to 10 minutes of text.',
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
  publishedOn: '2024-06-8',
  lastUpdated: '2024-06-8',
  isPublished: true,
};
