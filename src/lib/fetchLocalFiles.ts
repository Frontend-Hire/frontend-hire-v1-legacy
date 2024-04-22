import { BlogMeta } from '@/types/Blogs';
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
      isNew: meta.isNew,
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

// Will be used later to get all courses for the courses page
const coursesPath = path.join(process.cwd(), '/src/data/courses');

export const getCoursePages = cache(async (courseId: string) => {
  const courseMeta: Record<string, string> = require(
    `@/data/courses/${courseId}/_meta.json`,
  );

  return Object.entries(courseMeta);
});

export const getCoursePage = cache(
  async (courseId: string, chapter: string) => {
    const { default: getContent, meta } = require(
      `@/data/courses/${courseId}/${chapter}.mdx`,
    );

    return { getContent, meta } as {
      getContent: () => React.ReactNode;
      meta?: Record<string, string>;
    };
  },
);

const blogPath = path.join(process.cwd(), '/src/data/blog');

export const getBlogPostsMetaFromLocal = cache(async () => {
  const blogPosts = fs.readdirSync(blogPath);

  const posts = blogPosts
    .filter((post) => !post.startsWith('.'))
    .map((post) => {
      const { meta }: { meta: BlogMeta } = require(
        `@/data/blog/${post}/meta.ts`,
      );

      return {
        id: post,
        ...meta,
      };
    });

  return posts.sort((a, b) =>
    new Date(a.lastUpdated) > new Date(b.lastUpdated) ? -1 : 1,
  );
});

export const getBlogPostFromLocal = cache(async (postId: string) => {
  const { default: getContent } = require(`@/data/blog/${postId}/content.mdx`);

  const { meta }: { meta: BlogMeta } = require(`@/data/blog/${postId}/meta.ts`);

  return { getContent, meta } as {
    getContent: () => React.ReactNode;
    meta: BlogMeta;
  };
});
