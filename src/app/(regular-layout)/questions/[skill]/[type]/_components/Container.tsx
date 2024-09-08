import QuestionList from '@/components/Questions/QuestionList';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { getCompletedQuestions } from '@/lib/questionStats';
import { QuestionSkill, QuestionType } from '@/types/Question';

type ContainerProps = {
  skill: QuestionSkill;
  type: QuestionType;
};

export default async function Container({ skill, type }: ContainerProps) {
  const [localQuestions, completedQuestions] = await Promise.all([
    getQuestionsFromLocal(skill, type),
    getCompletedQuestions(),
  ]);

  return (
    <QuestionList
      questions={localQuestions}
      completedQuestionsServer={completedQuestions}
      skill={skill}
      type={type}
    />
  );
}
