import { SystemDesign } from '@/types/SystemDesign';

export const meta: SystemDesign = {
  id: 'domain-repo-structure',
  title: 'Design the domain and repository structure',
  description:
    'How would you setup the domains and repositories for company with multiple user facing web apps?',
  link: '/system-design/domain-repo-structure/overview',
  isPro: true,
  isPublished: true,
  publishedOn: new Date('2024-08-08'),
  chapters: {
    overview: 'Overview',
    'domain-structure': 'Domain Structure',
    'repository-structure': 'Repository Structure',
    summary: 'Summary',
  },
};
