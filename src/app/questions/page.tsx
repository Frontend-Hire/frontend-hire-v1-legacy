import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';
import VisuallyHidden from '@/components/ui/visually-hidden';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';
import { DIFFICULTY } from '@/types/Question';

export default async function Questions() {
  const data = await getQuestionsFromLocal();

  return (
    <main className="flex flex-col p-[10px] md:px-[150px] md:py-[20px] lg:px-[200px] xl:px-[250px]">
      <div className="flex flex-col gap-[15px] py-[10px]">
        <Heading variant="h1">Questions</Heading>
        <p className="text-sm text-muted">Real World And Interview Based</p>
      </div>
      <section className="flex flex-col gap-[20px]">
        <VisuallyHidden>Questions List</VisuallyHidden>
        <ul>
          <li>
            <QuestionItem
              id="curry-what"
              title="Question Title"
              description="Question Description"
              difficulty={DIFFICULTY.EASY}
              isCompleted={false}
              skills={['React', 'JS', 'HTML', 'CSS']}
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
