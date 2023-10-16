import { SKILL_DESCRIPTION_MAP } from '@/lib/constants';

interface Props {
  skill: string;
}

export default function SkillDescription({ skill }: Props) {
  return (
    <p className="mb-4 text-center text-lg text-gray-800">
      {SKILL_DESCRIPTION_MAP[skill] || ''}
    </p>
  );
}
