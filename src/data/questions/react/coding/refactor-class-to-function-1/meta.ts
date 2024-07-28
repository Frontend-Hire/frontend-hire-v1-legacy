import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'refactor-class-to-function-1',
  title: 'Refactor: Class to Function Components - 1',
  description:
    'Though modern React applications are built using function components, there are still many class components in the wild. You might need to refactor a class component to a function component for various reasons.',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-07-22'),
  difficulty: DIFFICULTY.MEDIUM,
  showPreview: true,
  showConsole: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/AddTodo.js': { code: require('./src/AddTodo').code },
    '/TodoList.js': { code: require('./src/TodoList').code },
  },
};
