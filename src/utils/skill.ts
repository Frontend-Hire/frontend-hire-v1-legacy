import { capitalize } from './text';

const SKILL_MAP: { [key: string]: string } = {
  next: 'Next.js',
};

export const getSkill = (skill: string) => {
  return SKILL_MAP[skill] || capitalize(skill);
};
