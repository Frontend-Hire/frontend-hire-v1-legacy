import { ProjectOverview } from '@/types/Project';
import { QuestionOverview } from '@/types/Question';
import fs from 'fs';
import path from 'path';
import { cache } from 'react';

const questionsPath = path.join(process.cwd(), '/src/data/questions');

export const getQuestionsFromLocal = cache(async () => {
  const questionsList: QuestionOverview[] = [];

  const questions = fs.readdirSync(questionsPath);

  for (const question of questions.sort()) {
    const { default: getContent, meta } = require(
      `@/data/questions/${question}/prompt.mdx`,
    );
    questionsList.push({
      id: question,
      title: meta.title,
      description: meta.description,
      skills: meta.skills,
      difficulty: meta.difficulty,
    });
  }

  return questionsList;
});

const projectsPath = path.join(process.cwd(), '/src/data/projects');

export async function getProjectsFromLocal() {
  const projects: ProjectOverview[] = [];
  const allProjects = fs.readdirSync(projectsPath);

  for (const project of allProjects) {
    const { default: getContent, meta } = require(
      `@/data/projects/${project}/project.mdx`,
    );
    projects.push({
      id: project,
      title: meta.title,
      difficulty: meta.difficulty,
      tasks: meta.tasks,
    });
  }

  return projects;
}
