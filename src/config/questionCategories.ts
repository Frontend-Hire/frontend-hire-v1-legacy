import { QuestionSkill, QuestionType } from '@/types/Question';

type QuestionCategory = {
  id: `${QuestionSkill}/${QuestionType}`;
  type: QuestionType;
  skill: QuestionSkill;
  title: string;
  className: string;
};

export const QUESTION_CATEGORIES: QuestionCategory[] = [
  {
    id: 'web/theory',
    type: 'theory',
    skill: 'web',
    title: 'Web Theory',
    className: `hover:bg-primary`,
  },
  {
    id: 'css/coding',
    type: 'coding',
    skill: 'css',
    title: 'CSS Coding',
    className: `hover:bg-[hsl(203,66%,54%)]`,
  },
  {
    id: 'javascript/coding',
    type: 'coding',
    skill: 'javascript',
    title: 'JavaScript Coding',
    className: `hover:bg-[hsl(52,84%,63%)] hover:text-black`,
  },
  {
    id: 'javascript/theory',
    type: 'theory',
    skill: 'javascript',
    title: 'JavaScript Theory',
    className: `hover:bg-[hsl(52,84%,63%)] hover:text-black`,
  },
  {
    id: 'react/coding',
    type: 'coding',
    skill: 'react',
    title: 'React Coding',
    className: `hover:bg-[hsl(192,82%,34%)]`,
  },
  {
    id: 'react/theory',
    type: 'theory',
    skill: 'react',
    title: 'React Theory',
    className: `hover:bg-[hsl(192,82%,34%)]`,
  },
  {
    id: 'next/coding',
    type: 'coding',
    skill: 'next',
    title: 'Next.js Coding',
    className: `hover:bg-white hover:text-black`,
  },
  {
    id: 'dsa/theory',
    type: 'theory',
    skill: 'dsa',
    title: 'DSA Theory',
    className: `hover:bg-primary`,
  },
  {
    id: 'dsa/coding',
    type: 'coding',
    skill: 'dsa',
    title: 'DSA Coding',
    className: `hover:bg-primary`,
  },
];
