import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'cookies-vs-local-storage-for-auth',
  title: 'Cookies vs Local Storage for Authentication',
  description:
    'When implementing authentication in web applications, developers have a choice between storing tokens in cookies or local storage. Both methods have their pros and cons in terms of security, ease of use, and compatibility with various authentication methods.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-24'),
  isFree: true,
};
