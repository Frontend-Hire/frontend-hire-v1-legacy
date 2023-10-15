import { QuestionDifficulty } from '@/types/Question';
import fs from 'fs';
import path from 'path';

const questionsPath = path.join(process.cwd(), '/src/questions');

export async function getQuestionsFromLocal() {
  const questions: {
    [skill: string]: {
      name: string;
      difficulty: QuestionDifficulty;
    }[];
  } = {};

  const skills = fs.readdirSync(questionsPath);

  for (const skill of skills) {
    questions[skill] = [];
    const allQuestions = fs.readdirSync(path.join(questionsPath, skill));
    for (const question of allQuestions) {
      const { default: getContent, meta } = require(
        `@/questions/${skill}/${question}/prompt.mdx`,
      );
      questions[skill].push({ name: question, difficulty: meta.difficulty });
    }
  }

  return questions;
}
