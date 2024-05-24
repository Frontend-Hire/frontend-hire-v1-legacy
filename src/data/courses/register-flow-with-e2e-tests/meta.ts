import { Course } from '@/types/Course';
import image from '@/assets/course-covers/login-register-flow-e2e.webp';

export const meta: Course = {
  id: 'register-flow-with-e2e-tests',
  title: 'Login Register Flow',
  description:
    'Learn how to build a login and register flow with E2E tests and Supabase.',
  link: 'courses/register-flow-with-e2e-tests/overview',
  image: image,
  isPublished: true,
  isPro: true,
  chapters: {
    overview: 'Overview',
    'setup-nextjs-project': 'Setup Next.js Project',
    'setup-supabase-project': 'Setup Supabase Project',
    'building-landing-page': 'Building Landing Page',
    'building-login-page': 'Building Login Page',
    'e2e-testing-login': 'E2E Testing Login Page',
    'building-register-page': 'Building Register Page',
    'e2e-testing-register': 'E2E Testing Register Page',
    'bonus-saving-auth-state': 'Bonus: Saving Auth State',
    summary: 'Summary',
  },
};
