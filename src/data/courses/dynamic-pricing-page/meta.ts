import { Course } from '@/types/Course';
import image from './assets/cover.webp';

export const meta: Course = {
  id: 'dynamic-pricing-page-next-js',
  title: 'Dynamic Pricing Page',
  description:
    "Learn to build a dynamic pricing page customized based on the user's location.",
  link: 'courses/dynamic-pricing-page/overview',
  category: 'Next.js',
  image: image,
  isPublished: true,
  publishedOn: new Date('2024-06-21'),
  isPro: true,
  isNew: true,
  chapters: {
    overview: 'Overview',
    summary: 'Summary',
  },
};
