import { Course } from '@/types/Course';
import image from '@/assets/course-covers/stackpack-react.webp';

export const meta: Course = {
  id: 'stackpack',
  title: 'Stackpack',
  description:
    'Build a Sandpack clone with WebContainers in React and TypeScript.',
  link: 'courses/stackpack/overview',
  category: 'React',
  image: image,
  isPro: true,
  isPublished: true,
  publishedOn: new Date('2024-04-19'),
  chapters: {
    overview: 'Overview',
    'project-setup': 'Project Setup',
    'building-layout': 'Building Layout',
    'think-about-what-to-build-next': 'Think about what to build next',
    'building-code-editor': 'Building Code Editor',
    'webcontainer-api': 'WebContainer API',
    'building-terminal': 'Building Terminal',
    'building-preview': 'Building Preview',
    'deploying-to-production': 'Deploying to Production',
    summary: 'Summary',
  },
};
