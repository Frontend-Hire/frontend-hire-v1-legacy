import { SpecialItem } from '@/types/Guides';

export const COURSE_ITEMS: SpecialItem[] = [
  {
    title: 'The Joy of React',
    link: 'https://www.joyofreact.com/',
    author: 'Josh W Comeau',
    description:
      "Interactive courses are the best. This course comes with a lot of fun and joy while teaching you almost everything you'd ever need. Highly recommended!",
    isPaid: true,
    isRecommended: true,
    isCourseItem: true,
  },
  {
    title: 'Offical React Learning Guide',
    link: 'https://react.dev/learn',
    description:
      'The new React docs are amazing and will teach great foundational skills.',
    isRecommended: true,
    isCourseItem: true,
    author: 'React Team and external contributors',
  },
  {
    title: 'Advanced React',
    link: 'https://advanced-react.com/',
    author: 'Nadia Makarevich',
    isPaid: true,
    isRecommended: true,
    description:
      'This is a book that teaches you the why behind React and makes the advanced concepts feel basic. Highly Recommended!',
    isCourseItem: true,
  },
  {
    title: 'Framework Field Guide',
    link: 'https://unicorn-utterances.com/collections/framework-field-guide-fundamentals',
    author: 'Corbin Crutchley',
    isPaid: false,
    isRecommended: true,
    description:
      'This is a gem of a resource. In fact, it will teach you the fundamentals of React, Vue, and Angular at once. Highly recommended!',
    isCourseItem: true,
  },
  {
    title: 'Complete Intro to React, v8',
    link: 'https://frontendmasters.com/courses/complete-react-v8/',
    author: 'Brian Holt on Frontend Masters',
    isPaid: true,
    description:
      'This course is the most practical one out there. Brian has a great teaching style and you will learn a lot in a short time! Once done with this, continue with the Intermediate React course.',
    isCourseItem: true,
  },
  {
    title: 'React - The Complete Guide 2023 (incl. React Router & Redux)',
    link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    author: 'Maximilian Schwarzmüller',
    isPaid: true,
    description:
      'Our founder started with this course. It is a great course for complete beginners! The best part is the structure of topics.',
    isCourseItem: true,
  },
  {
    title: 'The Ultimate React Course 2024: React, Redux & More',
    link: 'https://www.udemy.com/course/the-ultimate-react-course/',
    author: 'Jonas Schmedtmann',
    description:
      "Jonas is well known for his JavaScript course. He took time to create this React course and we can confirm that it doesn't disappoint.",
    isPaid: true,
    isCourseItem: true,
  },
];
