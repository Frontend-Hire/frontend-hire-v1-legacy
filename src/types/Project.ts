export type ProjectTab = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export enum PROJECT_DIFFICULTY {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  MASTER = 'master',
}

export type ProjectDifficulty = PROJECT_DIFFICULTY;
