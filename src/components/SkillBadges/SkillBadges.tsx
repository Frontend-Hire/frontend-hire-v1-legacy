import { cn } from '@/lib/utils';

const SKILL_CLASS: { [skill: string]: { className: string; label: string } } = {
  HTML: { className: 'bg-[#E44D26] text-white', label: 'HTML' },
  CSS: { className: 'bg-[#2062AF] text-white', label: 'CSS' },
  JS: { className: 'bg-[#F0DB4F] text-black', label: 'js' },
  REACT: { className: 'bg-[#61DAFB] text-black', label: 'React' },
  JEST: { className: 'bg-[#99425B] text-white', label: 'JEST' },
  ESLINT: { className: 'bg-[#4B32C3] text-white', label: 'ESLint' },
  HUSKY: { className: 'bg-[#914f00] text-white', label: 'Husky' },
  PRETTIER: { className: 'bg-[#1A2B34] text-white', label: 'Prettier' },
  VITE: { className: 'bg-[#FFC21B] text-black', label: 'Vite' },
  PARCEL: { className: 'bg-[#D8A974] text-black', label: 'Parcel' },
};

interface Props {
  skills: string[];
}

export default function SkillsBadges({ skills }: Props) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {skills.sort().map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-[5px] px-[4px] py-[2px] text-xs font-medium leading-[100%]',
        SKILL_CLASS[skill.toUpperCase()]?.className || 'bg-gray-800 text-white',
      )}
    >
      {SKILL_CLASS[skill.toUpperCase()]?.label || skill}
    </div>
  );
}
