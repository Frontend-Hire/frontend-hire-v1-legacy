import { BlogMeta } from '@/types/Blogs';
import { Cohort } from '@/types/Cohort';
import { Course } from '@/types/Course';
import { OSS } from '@/types/OSS';
import { Question, QuestionSkill, QuestionType } from '@/types/Question';
import { SystemDesign } from '@/types/SystemDesign';
import fs from 'fs';
import path from 'path';
import { cache } from 'react';

export const getQuestionsFromLocal = cache(
  async (skill: QuestionSkill, type: QuestionType) => {
    const questionsPath = path.join(
      process.cwd(),
      `/src/data/questions/${skill}/${type}`,
    );

    const questionsList: Question[] = [];

    const questions = fs.readdirSync(questionsPath);

    for (const question of questions.filter(
      (question) => !question.startsWith('.'),
    )) {
      const { meta }: { meta: Question } = require(
        `@/data/questions/${skill}/${type}/${question}/meta.ts`,
      );

      questionsList.push({
        ...meta,
      });
    }

    return questionsList;
  },
);

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

const cohortsPath = path.join(process.cwd(), '/src/data/cohorts');

export const getCohortsFromLocal = cache(async () => {
  const cohorts: Cohort[] = [];
  const allCohorts = fs.readdirSync(cohortsPath);

  for (const cohort of allCohorts.filter((cohort) => !cohort.startsWith('.'))) {
    const { meta } = require(`@/data/cohorts/${cohort}/meta.ts`);
    if (meta.isPublished) {
      cohorts.push({
        ...meta,
      });
    }
  }

  return cohorts.sort((a, b) => {
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

export const getCohortPages = cache(async (cohortId: string) => {
  const { meta }: { meta: Cohort } = require(
    `@/data/cohorts/${cohortId}/meta.ts`,
  );

  return meta;
});

export const getCohortPage = cache(
  async (cohortId: string, chapter: string) => {
    const { default: getContent, meta } = require(
      `@/data/cohorts/${cohortId}/${chapter}.mdx`,
    );

    return { getContent, meta } as {
      getContent: () => React.ReactNode;
      meta?: Record<string, string>;
    };
  },
);

const systemDesignPath = path.join(process.cwd(), '/src/data/system-design');

export const getSystemDesignsFromLocal = cache(async () => {
  const systems: SystemDesign[] = [];
  const allSystems = fs.readdirSync(systemDesignPath);

  for (const system of allSystems.filter((system) => !system.startsWith('.'))) {
    const { meta } = require(`@/data/system-design/${system}/meta.ts`);
    if (meta.isPublished) {
      systems.push({
        ...meta,
      });
    }
  }

  return systems.sort((a, b) => {
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

export const getSystemDesign = cache(async (systemDesignId: string) => {
  const { meta }: { meta: SystemDesign } = require(
    `@/data/system-design/${systemDesignId}/meta.ts`,
  );

  return meta;
});

export const getSystemDesignPage = cache(
  async (systemDesignId: string, chapter: string) => {
    const { default: getContent, meta } = require(
      `@/data/system-design/${systemDesignId}/${chapter}.mdx`,
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

const ossPath = path.join(process.cwd(), '/src/data/oss');

export const getOSSProjectsFromLocal = cache(async () => {
  const OSSProjects = fs.readdirSync(ossPath);

  const filteredOSSProjects = OSSProjects.filter(
    (project) => !project.startsWith('.'),
  ).map((project) => {
    const { meta }: { meta: OSS } = require(`@/data/oss/${project}/meta.ts`);

    return {
      ...meta,
    };
  });

  return filteredOSSProjects.sort((a, b) => {
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

export const getOSSProject = cache(async (ossId: string) => {
  const { default: getContent } = require(`@/data/oss/${ossId}/project.mdx`);

  const { meta }: { meta: OSS } = require(`@/data/oss/${ossId}/meta.ts`);

  return { getContent, meta } as {
    getContent: () => React.ReactNode;
    meta: OSS;
  };
});
