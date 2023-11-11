import Heading from '@/components/Heading';
import QuestionSkillCard from '@/components/QuestionSkillCard';

export default async function Questions() {
  return (
    <main>
      <Heading variant="h1" className="mb-8 text-center">
        Projects
      </Heading>

      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3"></div>
    </main>
  );
}
