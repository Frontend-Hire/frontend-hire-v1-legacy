import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'ways-to-prevent-ddos',
  title: 'What are the ways to prevent DDoS in the frontend?',
  description:
    'Preventing Distributed Denial-of-Service (DDoS) attacks involves a combination of strategies across both backend and frontend systems. Although much of the mitigation happens on the server, there are some key practices on the frontend that can contribute to reducing the attack surface.',
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-24'),
  isFree: true,
};
