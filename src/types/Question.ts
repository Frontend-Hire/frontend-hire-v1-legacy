export type QuestionOverview = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  difficulty: QuestionDifficulty;
};

export type SkillQuestions = {
  [skill: string]: QuestionOverview[];
};

export type SkillStats = {
  [skill: string]: { total: number; submitted: number };
};

export type QuestionTab = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export enum DIFFICULTY {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  MASTER = 'master',
}

export type QuestionDifficulty = DIFFICULTY;
