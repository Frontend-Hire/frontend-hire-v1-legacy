import {
  CODING_ENVIRONMENT_TYPE,
  DIFFICULTY,
  Question,
  QUESTION_TYPE,
} from '@/types/Question';

export const meta: Question = {
  id: 'use-volume',
  title: 'Hooks: useVolume',
  description:
    'A generic volume control hook. Can you use it to create a volume control for your music or video player?',
  type: QUESTION_TYPE.CODING,
  environment: CODING_ENVIRONMENT_TYPE.BROWSER,
  template: 'react',
  externalCDNs: ['https://cdn.tailwindcss.com'],
  recommendedLayout: 'col-3',
  publishedOn: new Date('2024-09-02'),
  difficulty: DIFFICULTY.MEDIUM,
  showPreview: true,
  showConsole: true,
  files: {
    '/App.js': { code: require('./src/App.js').code },
    '/useVolume.js': { code: require('./src/useVolume.js').code },
    '/CustomAudioControl.js': {
      code: require('./src/CustomAudioControl.js').code,
      readOnly: true,
    },
  },
};
