import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';

import QuestionsCarousel from './QuestionsCarousel';

export default async function QuestionsFeature() {
  const questions = await getQuestionsFromLocal();

  return <QuestionsCarousel questions={questions} />;
}
