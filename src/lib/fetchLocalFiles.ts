import { ProjectOverview } from '@/types/Project';
import { QuestionOverview } from '@/types/Question';
import fs from 'fs';
import path from 'path';
import { cache } from 'react';

const questionsPath = path.join(process.cwd(), '/src/data/questions');

export const getQuestionsFromLocal = cache(async () => {
  const questionsList: QuestionOverview[] = [];

  const questions = fs.readdirSync(questionsPath);

  for (const question of questions.filter(
    (question) => !question.startsWith('.'),
  )) {
    const { default: getContent, meta } = require(
      `@/data/questions/${question}/prompt.mdx`,
    );
    questionsList.push({
      id: question,
      title: meta.title,
      description: meta.description,
      skills: meta.skills,
      difficulty: meta.difficulty,
      questionNumber: meta.questionNumber,
    });
  }

  return questionsList;
});

const projectsPath = path.join(process.cwd(), '/src/data/projects');

export const getProjectsFromLocal = cache(async () => {
  const projects: ProjectOverview[] = [];
  const allProjects = fs.readdirSync(projectsPath);

  for (const project of allProjects.filter(
    (project) => !project.startsWith('.'),
  )) {
    const { default: getContent, meta } = require(
      `@/data/projects/${project}/project.mdx`,
    );
    projects.push({
      id: project,
      title: meta.title,
      description: meta.description,
      difficulty: meta.difficulty,
      isRecommended: meta.isRecommended,
      tasks: meta.tasks,
      skills: meta.skills,
    });
  }

  return projects;
});
