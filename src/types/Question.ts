export type QuestionOverview = {
  id: string;
  title: string;
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

export type QuestionDifficulty = 'easy' | 'medium' | 'hard' | 'master';
