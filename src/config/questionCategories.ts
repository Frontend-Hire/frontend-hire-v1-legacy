import { QuestionSkill, QuestionType } from '@/types/Question';

type QuestionCategory = {
  id: `${QuestionSkill}/${QuestionType}`;
  title: string;
  className: string;
};

export const QUESTION_CATEGORIES: QuestionCategory[] = [
  {
    id: 'web/theory',
    title: 'Web Theory',
    className: `hover:bg-primary`,
  },
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
    id: 'javascript/theory',
    title: 'JavaScript Theory',
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
  {
    id: 'dsa/theory',
    title: 'DSA Theory',
    className: `hover:bg-primary`,
  },
  {
    id: 'dsa/coding',
    title: 'DSA Coding',
    className: `hover:bg-primary`,
  },
];
