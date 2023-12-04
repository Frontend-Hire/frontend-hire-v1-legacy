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
      <VisuallyHidden>Questions List</VisuallyHidden>
      <ul className="flex flex-col gap-[20px]">
        {data.map((question) => (
          <li key={question.id}>
            <QuestionItem
              id={question.id}
              title={question.title}
              description={question.description}
              difficulty={question.difficulty}
              isCompleted={false}
              skills={question.skills}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
