import Heading from '@/components/Heading';
import QuestionSkillCard from '@/components/QuestionSkillCard';

export default function Questions() {
  return (
    <section>
      <Heading variant="h1" className="mb-8 text-center">
        Questions
      </Heading>

      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        <QuestionSkillCard
          skill="HTML"
          description="Do you really know HTML?"
          noOfQuestions={3}
        />
        <QuestionSkillCard
          skill="CSS"
          description="Scared?"
          noOfQuestions={3}
        />
        <QuestionSkillCard
          skill="JavaScript"
          description="Not so easy!"
          noOfQuestions={5}
        />
        <QuestionSkillCard
          skill="React"
          description="Crowd Favorite!"
          noOfQuestions={5}
        />
      </div>
    </section>
  );
}
