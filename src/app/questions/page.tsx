import Heading from '@/components/Heading';
import QuestionSkillCard from '@/components/QuestionSkillCard';
import fs from 'fs';
import path from 'path';

const questionsPath = path.join(process.cwd(), '/src/questions');

async function getQuestionsFromLocal() {
  const questions: {
    [key: string]: string[];
  } = {};

  const skills = fs.readdirSync(questionsPath);

  for (const skill of skills) {
    questions[skill] = fs.readdirSync(path.join(questionsPath, skill));
  }

  return questions;
}

export default async function Questions() {
  const data = await getQuestionsFromLocal();

  return (
    <main>
      <Heading variant="h1" className="mb-8 text-center">
        Questions
      </Heading>

      <div className="grid grid-cols-1 justify-center justify-items-stretch gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        <QuestionSkillCard
          skill="HTML"
          description="Do you really know HTML?"
          noOfQuestions={data['HTML'].length}
        />
        <QuestionSkillCard
          skill="CSS"
          description="Scared?"
          noOfQuestions={data['CSS'].length}
        />
        <QuestionSkillCard
          skill="JavaScript"
          description="Not so easy!"
          noOfQuestions={data['JavaScript'].length}
        />
        <QuestionSkillCard
          skill="React"
          description="Crowd Favorite!"
          noOfQuestions={data['React']?.length || 0}
        />
      </div>
    </main>
  );
}
