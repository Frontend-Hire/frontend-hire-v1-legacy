import { DIFFICULTY, QuestionDifficulty } from '@/types/Question';

import { cva } from 'class-variance-authority';

const badge = cva('font-semibold rounded-full mx-2', {
  variants: {
    intent: {
      [DIFFICULTY.EASY]: 'bg-green-500',
      [DIFFICULTY.MEDIUM]: 'bg-yellow-500',
      [DIFFICULTY.HARD]: 'bg-red-500',
      [DIFFICULTY.MASTER]: 'bg-gray-500',
    },
    size: {
      small: ['text-xs', 'py-0.5', 'px-1'],
      medium: ['text-sm', 'py-1', 'px-2'],
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

interface Props {
  difficulty: QuestionDifficulty;
  size?: 'small' | 'medium';
}

export default function DifficultyBadge({ difficulty, size }: Props) {
  return (
    <span className={badge({ intent: difficulty, size })}>
      {difficulty.toUpperCase()}
    </span>
  );
}
