import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import QuestionList from './QuestionList';

export default async function Container() {
  const localQuestions = await getQuestionsFromLocal();

  return <QuestionList questions={localQuestions} />;
}
