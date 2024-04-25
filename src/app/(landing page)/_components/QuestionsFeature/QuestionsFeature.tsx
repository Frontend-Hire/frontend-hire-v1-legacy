import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';

import QuestionsCarousel from './QuestionsCarousel';
import VisuallyHidden from '@/components/ui/visually-hidden';

export default async function QuestionsFeature() {
  const questions = await getQuestionsFromLocal();

  return (
    <>
      <VisuallyHidden>List of Questions</VisuallyHidden>
      <QuestionsCarousel questions={questions} />
    </>
  );
}
