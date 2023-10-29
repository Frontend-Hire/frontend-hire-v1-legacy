import { SkillQuestions, SkillStats } from '@/types/Question';

export const getSubmittedSkillQuestions = (
  allQuestions: SkillQuestions,
  submittedQuestions: { question_id: string }[],
) => {
  const skillStats: SkillStats = {};

  for (const skill in allQuestions) {
    const skillQuestionIds = new Set(
      allQuestions[skill].map((question) => question.id),
    );
    skillStats[skill] = { total: allQuestions[skill].length, submitted: 0 };

    for (const question of submittedQuestions) {
      if (skillQuestionIds.has(question.question_id)) {
        skillStats[skill].submitted += 1;
      }
    }
  }

  return skillStats;
};
