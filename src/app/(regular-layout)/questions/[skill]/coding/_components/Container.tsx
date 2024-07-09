import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import QuestionList from './QuestionList';
import { QUESTION_SKILL, QUESTION_TYPE } from '@/types/Question';

type ContainerProps = {
  skill: QUESTION_SKILL;
  type: QUESTION_TYPE;
};

export default async function Container({ skill, type }: ContainerProps) {
  const localQuestions = await getQuestionsFromLocal(skill, type);

  return <QuestionList questions={localQuestions} />;
}
