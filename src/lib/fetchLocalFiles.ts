import { BlogMeta } from '@/types/Blogs';
import { Course } from '@/types/Course';
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

const coursesPath = path.join(process.cwd(), '/src/data/courses');

export const getCoursesFromLocal = cache(async () => {
  const courses: Course[] = [];
  const allCourses = fs.readdirSync(coursesPath);

  for (const course of allCourses.filter((course) => !course.startsWith('.'))) {
    const { meta } = require(`@/data/courses/${course}/meta.ts`);
    if (meta.isPublished) {
      courses.push({
        ...meta,
      });
    }
  }

  return courses.sort((a, b) => {
    if (a.publishedOn && b.publishedOn) {
      return b.publishedOn.getTime() - a.publishedOn.getTime();
    } else if (a.publishedOn) {
      return -1;
    } else if (b.publishedOn) {
      return 1;
    } else {
      return 0;
    }
  });
});

export const getCoursePages = cache(async (courseId: string) => {
  const { meta }: { meta: Course } = require(
    `@/data/courses/${courseId}/meta.ts`,
  );

  return meta;
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

export const getSystemDesign = cache(async (questionId: string) => {
  const systemDesignMeta: {
    isPro?: boolean;
    isPublished?: boolean;
    chapters: Record<string, string>;
  } = require(`@/data/system-design/${questionId}/_meta.json`);

  return systemDesignMeta;
});

export const getSystemDesignPage = cache(
  async (questionId: string, chapter: string) => {
    const { default: getContent, meta } = require(
      `@/data/system-design/${questionId}/${chapter}.mdx`,
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
    new Date(a.publishedOn) > new Date(b.publishedOn) ? -1 : 1,
  );
});

export const getBlogPostFromLocal = cache(async (postId: string) => {
  const { default: getContent } = require(`@/data/blog/${postId}/post.mdx`);

  const { meta }: { meta: BlogMeta } = require(`@/data/blog/${postId}/meta.ts`);

  return { getContent, meta } as {
    getContent: () => React.ReactNode;
    meta: BlogMeta;
  };
});
