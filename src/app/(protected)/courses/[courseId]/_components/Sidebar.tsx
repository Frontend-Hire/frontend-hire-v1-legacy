import { twMerge } from 'tailwind-merge';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Teams', current: false, href: '#' },
  { name: 'Projects', current: false, href: '#' },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
];

type SidebarProps = {
  params: {
    course: string[];
  };
};

// to be reimplemented using cva ~ashish
export default function Sidebar({ params }: SidebarProps) {
  return (
    <nav className="flex w-[250px] flex-col">
      <ul className="space-y-1">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={twMerge(
              'rounded px-2 py-1 text-muted transition-colors',
              item.current && 'bg-[#290025] text-[#FF5CF2]',
              !item.current && 'hover:bg-[#140012]',
            )}
          >
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
