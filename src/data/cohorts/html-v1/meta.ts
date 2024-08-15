import image from './assets/cover.webp';
import { Cohort } from '@/types/Cohort';

export const meta: Cohort = {
  id: 'html-v1',
  title: 'Learn HTML V1',
  description:
    'The only HTML cohort you need to get started with HTML. This course will teach you everything you need to get started with HTML.',
  link: 'cohorts/html-v1/overview',
  image: image,
  isPublished: false,
  publishedOn: new Date('2024-08-20'),
  isPro: false,
  chapters: {
    overview: 'Overview',
    'how-to-run-html': 'How to run HTML?',
    headings: 'Headings',
  },
};
