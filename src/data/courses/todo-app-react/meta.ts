import { Course } from '@/types/Course';
import image from '@/assets/course-covers/todo-app-react-tdd-typescript.webp';

export const meta: Course = {
  id: 'todo-app-react',
  link: 'courses/todo-app-react/overview',
  title: 'Todo App',
  description:
    'We teach more than just React, TypeScript and TDD with this course.',
  isPro: false,
  isPublished: true,
  image: image,
  isVideoAvailable: true,
  chapters: {
    overview: 'Overview',
    'project-setup': 'Project Setup',
    'reading-tasks': 'Reading Tasks',
    'adding-tasks': 'Adding Tasks',
    'setup-testing': 'Setup Testing',
    'writing-tests': 'Writing Tests',
    'test-driven-development': 'TDD (Test Driven Development)',
    refactoring: 'Refactoring',
    'component-composition': 'Component Composition',
    summary: 'Summary',
  },
};
