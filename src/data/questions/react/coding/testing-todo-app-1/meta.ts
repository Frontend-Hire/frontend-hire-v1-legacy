import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'testing-todo-app-1',
  title: 'Testing: Todo App - 1',
  description:
    'You built a Todo App and sent it to the testing team. They sent you a list of bugs. How do you proceed to fix them?',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.LOCAL,
  publishedOn: new Date('2024-07-29'),
  difficulty: DIFFICULTY.MEDIUM,
};
