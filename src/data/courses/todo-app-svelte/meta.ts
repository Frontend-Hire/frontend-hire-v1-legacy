import { Course } from '@/types/Course';
import image from '@/assets/course-covers/todo-app-react-tdd-typescript.webp';

export const meta: Course = {
  id: 'todo-app-svelte',
  link: 'courses/todo-app-svelte/overview',
  title: 'Todo App',
  category: 'Svelte',
  description:
    'We teach more than just Svelte, TypeScript and TDD with this course.',
  isPro: true,
  isPublished: false,
  image: image,
  isNew: true,
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
