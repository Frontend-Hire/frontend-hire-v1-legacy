import DifficultyLegend from '@/components/DifficultyLegend';
import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';
import SkillDescription from '@/components/SkillDescription';
import { getQuestionsFromLocal } from '@/lib/fetchLocalFiles';

export default async function Skill({ params }: { params: { skill: string } }) {
  const { skill } = params;

  const data = await getQuestionsFromLocal();

  const currentSkillData = data[skill].sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );

  return (
    <section className="h-full bg-gray-100 p-2">
      <Heading variant="h1" className="mb-4 text-center">
        {skill} Questions
      </Heading>
      <SkillDescription skill={skill} />
      <DifficultyLegend />
      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {currentSkillData.map((question) => (
          <QuestionItem
            key={question.id}
            id={question.id}
            skill={skill}
            title={question.title}
            difficulty={question.difficulty}
            isCompleted={false}
            isFavorite={false}
          />
        ))}
      </div>
    </section>
  );
}
