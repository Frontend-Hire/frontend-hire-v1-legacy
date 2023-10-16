import DifficultyLegend from '@/components/DifficultyLegend';
import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';

export default async function Skill({ params }: { params: { skill: string } }) {
  const { skill } = params;

  const data = await getQuestionsFromLocal();

  const currentSkillData = data[skill].sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );

  return (
    <main className="h-full bg-gray-200">
      <Heading variant="h1" className="mb-8 text-center">
        {skill} Questions
      </Heading>
      <DifficultyLegend />
      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {currentSkillData.map((question) => (
          <QuestionItem
            key={question.name}
            id={question.name}
            skill={skill}
            title={question.name}
            difficulty={question.difficulty}
            isCompleted={false}
            isFavorite={false}
          />
        ))}
      </div>
    </main>
  );
}
