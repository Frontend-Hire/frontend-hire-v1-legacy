import image from './assets/cover.webp';
import { Cohort } from '@/types/Cohort';

export const meta: Cohort = {
  id: 'javascript-v1',
  title: 'Learn JavaScript V1',
  description:
    'You do not have to learn everything about JavaScript. This course will teach you almost everything that you need to get started with JavaScript.',
  link: 'cohorts/javascript-v1/overview',
  image: image,
  isPublished: true,
  publishedOn: new Date('2024-08-01'),
  isPro: true,
  isNew: true,
  chapters: {
    overview: 'Overview',
    'how-to-run-javascript': 'How to Run JavaScript?',
    comments: 'Comments',
    variables: 'Variables',
  },
};
