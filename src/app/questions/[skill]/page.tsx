import Heading from '@/components/Heading';

export default function Skill({ params }: { params: { skill: string } }) {
  return (
    <section>
      <Heading variant="h1" className="mb-8 text-center">
        {params.skill} Questions
      </Heading>
    </section>
  );
}
