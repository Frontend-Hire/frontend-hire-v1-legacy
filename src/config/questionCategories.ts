import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';

type QuestionCategory = {
  id: `${QUESTION_SKILL}/${QUESTION_TYPE}`;
  title: string;
  className: string;
};

export const QUESTION_CATEGORIES: QuestionCategory[] = [
  {
    id: 'css/coding',
    title: 'CSS Coding',
    className: `hover:bg-[hsl(203,66%,54%)]`,
  },
  {
    id: 'javascript/coding',
    title: 'JavaScript Coding',
    className: `hover:bg-[hsl(52,84%,63%)] hover:text-black`,
  },
  {
    id: 'react/coding',
    title: 'React Coding',
    className: `hover:bg-[hsl(192,82%,34%)]`,
  },
  {
    id: 'react/theory',
    title: 'React Theory',
    className: `hover:bg-[hsl(192,82%,34%)]`,
  },
  {
    id: 'next/coding',
    title: 'Next.js Coding',
    className: `hover:bg-white hover:text-black`,
  },
];
