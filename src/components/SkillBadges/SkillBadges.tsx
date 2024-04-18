import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const SKILL_CLASS: { [skill: string]: { className: string; label: string } } = {
  HTML: {
    className: 'hover:bg-[#E44D26] bg-[#E44D26] text-white',
    label: 'HTML',
  },
  CSS: {
    className: 'hover:bg-[#2062AF] bg-[#2062AF] text-white',
    label: 'CSS',
  },
  JS: { className: 'hover:bg-[#F0DB4F] bg-[#F0DB4F] text-black', label: 'js' },
  REACT: {
    className: 'hover:bg-[#61DAFB] bg-[#61DAFB] text-black',
    label: 'React',
  },
  JEST: {
    className: 'hover:bg-[#99425B] bg-[#99425B] text-white',
    label: 'JEST',
  },
  ESLINT: {
    className: 'hover:bg-[#4B32C3] bg-[#4B32C3] text-white',
    label: 'ESLint',
  },
  HUSKY: {
    className: 'hover:bg-[#914f00] bg-[#914f00] text-white',
    label: 'Husky',
  },
  PRETTIER: {
    className: 'hover:bg-[#1A2B34] bg-[#1A2B34] text-white',
    label: 'Prettier',
  },
  VITE: {
    className: 'hover:bg-[#FFC21B] bg-[#FFC21B] text-black',
    label: 'Vite',
  },
  PARCEL: {
    className: 'hover:bg-[#D8A974] bg-[#D8A974] text-black',
    label: 'Parcel',
  },
  NEXTJS: {
    className: 'hover:bg-[#000000] bg-[#000000] text-white',
    label: 'Next.js',
  },
  FIGMA: {
    className: 'hover:bg-[#F24E1E] bg-[#F24E1E] text-white',
    label: 'Figma',
  },
  VERCEL: {
    className: 'hover:bg-[#000000] bg-[#000000] text-white',
    label: 'Vercel',
  },
};

type SkillsBadgesProps = {
  skills: string[];
};

export default function SkillsBadges({ skills }: SkillsBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.sort().map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <Badge
      className={cn(
        'bg-gray-800 text-white',
        SKILL_CLASS[skill.toUpperCase()]?.className,
      )}
    >
      {SKILL_CLASS[skill.toUpperCase()]?.label || skill}
    </Badge>
  );
}
