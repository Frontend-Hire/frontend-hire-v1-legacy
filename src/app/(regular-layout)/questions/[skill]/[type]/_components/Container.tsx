import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import QuestionList from './QuestionList';
import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';
import { getCompletedQuestions } from '@/lib/questionStats';

type ContainerProps = {
  skill: QUESTION_SKILL;
  type: QUESTION_TYPE;
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
    />
  );
}
