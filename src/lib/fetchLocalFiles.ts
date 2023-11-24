import { ProjectOverview } from '@/types/Project';
import { SkillQuestions } from '@/types/Question';
import fs from 'fs';
import path from 'path';

const questionsPath = path.join(process.cwd(), '/src/data/questions');

export async function getQuestionsFromLocal() {
  const questions: SkillQuestions = {};

  const skills = fs.readdirSync(questionsPath);

  for (const skill of skills) {
    questions[skill] = [];
    const allQuestions = fs.readdirSync(path.join(questionsPath, skill));
    for (const question of allQuestions) {
      const { default: getContent, meta } = require(
        `@/data/questions/${skill}/${question}/prompt.mdx`,
      );
      questions[skill].push({
        id: question,
        title: meta.title,
        difficulty: meta.difficulty,
      });
    }
  }

  return questions;
}

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
