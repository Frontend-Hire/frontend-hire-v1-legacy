import Heading from '@/components/Heading';
import QuestionItem from '@/components/QuestionItem';

export default function Skill({ params }: { params: { skill: string } }) {
  const { skill } = params;

  return (
    <main>
      <Heading variant="h1" className="mb-8 text-center">
        {skill} Questions
      </Heading>
      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        <QuestionItem
          id="123"
          skill={skill}
          title="Forms"
          difficulty="MEDIUM"
          isCompleted={false}
          isFavorite={false}
        />
        <QuestionItem
          id="123"
          skill={skill}
          title="Forms"
          difficulty="MEDIUM"
          isCompleted={false}
          isFavorite={false}
        />
        <QuestionItem
          id="123"
          skill={skill}
          title="Forms"
          difficulty="MEDIUM"
          isCompleted={false}
          isFavorite={false}
        />
        <QuestionItem
          id="123"
          skill={skill}
          title="Forms"
          difficulty="MEDIUM"
          isCompleted={false}
          isFavorite={false}
        />
      </div>
    </main>
  );
}
