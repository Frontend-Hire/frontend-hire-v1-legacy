import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';

export default function Skill({ params }: { params: { skill: string } }) {
  const { skill } = params;

  return (
    <section>
      <Heading variant="h1" className="mb-8 text-center">
        {skill} Questions
      </Heading>

      <QuestionItem
        id="123"
        skill={skill}
        title="Forms"
        difficulty="MEDIUM"
        isCompleted={false}
        isFavorite={false}
      />
    </section>
  );
}
