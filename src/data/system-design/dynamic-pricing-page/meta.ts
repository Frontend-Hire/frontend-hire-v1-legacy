import { SystemDesign } from '@/types/SystemDesign';

export const meta: SystemDesign = {
  id: 'dynamic-pricing-page',
  title: 'Design a dynamic pricing page',
  description: 'It is not as simple as showing different pricing options.',
  link: '/system-design/dynamic-pricing-page/overview',
  isPro: true,
  isPublished: true,
  publishedOn: new Date('2024-06-05'),
  isNew: true,
  chapters: {
    overview: 'Overview',
    'geolocation-web-api': 'Geolocation Web API',
    'third-party-api': 'Third-Party API',
    'rendering-strategies': 'Rendering Strategies',
    'geo-redirection': 'Geo-Redirection',
    summary: 'Summary',
  },
};
