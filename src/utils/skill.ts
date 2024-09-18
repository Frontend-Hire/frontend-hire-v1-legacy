import { capitalize } from './text';

const SKILL_MAP: { [key: string]: string } = {
  next: 'Next.js',
  css: 'CSS',
  dsa: 'DSA',
  javascript: 'JavaScript',
};

export const getSkill = (skill: string) => {
  return SKILL_MAP[skill.toLowerCase()] || capitalize(skill.toLowerCase());
};
