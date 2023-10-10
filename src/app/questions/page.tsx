import Heading from '@/components/Heading';
import QuestionCategoryCard from '@/components/QuestionCategoryCard';

export default function Questions() {
  return (
    <section>
      <Heading variant="h1" className="text-center">
        Questions
      </Heading>

      <div>
        <QuestionCategoryCard
          category="HTML"
          description="Can you solve the basic HTML"
          noOfQuestions={3}
        />
        <QuestionCategoryCard category="CSS" noOfQuestions={3} />
        <QuestionCategoryCard category="JavaScript" noOfQuestions={5} />
        <QuestionCategoryCard category="React" noOfQuestions={5} />
      </div>
    </section>
  );
}
