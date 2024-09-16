import { DIFFICULTY, QUESTION_TYPE, Question } from '@/types/Question';

export const meta: Question = {
  id: 'what-are-web-vitals',
  title: 'What are Web Vitals?',
  description:
    "Web Vitals are Google's metrics for measuring user experience on websites, focusing on loading speed, interactivity, and visual stability.",
  type: QUESTION_TYPE.THEORY,
  difficulty: DIFFICULTY.MEDIUM,
  publishedOn: new Date('2024-09-16'),
  isFree: true,
};
