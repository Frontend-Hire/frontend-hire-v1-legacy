import { Course } from '@/types/Course';
import image from '@/assets/course-covers/seo-for-frontend-developers.webp';

export const meta: Course = {
  id: 'seo-for-frontend-developers',
  title: 'SEO for Frontend Developers',
  description: 'SEO is not just for marketers.',
  link: 'courses/seo-for-frontend-developers/overview',
  image: image,
  isPro: true,
  isPublished: false,
  chapters: {
    overview: 'Overview',
  },
};
