import { Course } from '@/types/Course';
import image from '@/assets/course-covers/layout-shifts-101.webp';

export const meta: Course = {
  id: 'layout-shifts-101',
  title: 'Layout Shifts 101',
  description: 'These can be quite annoying.',
  link: 'courses/layout-shifts-101/overview',
  image: image,
  isPro: true,
  isPublished: false,
  chapters: {
    overview: 'Overview',
  },
};
