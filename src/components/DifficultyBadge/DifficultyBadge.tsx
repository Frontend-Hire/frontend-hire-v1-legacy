import { DIFFICULTY, Difficulty } from '@/types/Question';

import { cva } from 'class-variance-authority';

const badge = cva('font-semibold rounded-full mx-2', {
  variants: {
    intent: {
      [DIFFICULTY.EASY]: 'bg-easy text-white',
      [DIFFICULTY.MEDIUM]: 'bg-medium text-black',
      [DIFFICULTY.HARD]: 'bg-hard text-white',
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

type DifficultyBadgeProps = {
  difficulty: Difficulty;
  size?: 'small' | 'medium';
};

export default function DifficultyBadge({
  difficulty,
  size,
}: DifficultyBadgeProps) {
  return (
    <span className={badge({ intent: difficulty, size })}>
      {difficulty.toUpperCase()}
    </span>
  );
}
