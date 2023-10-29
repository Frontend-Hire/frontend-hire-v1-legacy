import { SkillQuestions } from '@/types/Question';

export const getTotalQuestions = (allQuestions: SkillQuestions) => {
  let totalQuestions = 0;

  for (const key in allQuestions) {
    totalQuestions += allQuestions[key].length;
  }

  return totalQuestions;
};
