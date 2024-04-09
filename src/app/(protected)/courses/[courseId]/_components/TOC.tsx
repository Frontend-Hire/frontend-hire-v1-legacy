import { twMerge } from 'tailwind-merge';

const navigation = [
  { name: 'Dashboard', href: '#', current: true, level: 1 },
  { name: 'Teams', current: false, href: '#', level: 2 },
  { name: 'Projects', current: false, href: '#', level: 2 },
  { name: 'Calendar', href: '#', current: false, level: 1 },
  { name: 'Documents', href: '#', current: false, level: 1 },
  { name: 'Reports', href: '#', current: false, level: 2 },
];

// to be reimplemented using cva ~ashish
export default function Example() {
  return (
    <aside className="hidden md:block md:w-[150px] lg:w-[250px]">
      <p className="mb-2 text-sm font-medium">On This Page</p>
      <nav>
        <ul className="space-y-1">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={twMerge(
                'text-sm text-muted transition-colors',
                item.current && 'text-[#CC00B8]',
                item.level === 2 && 'ml-2',
                item.level === 3 && 'ml-4',
              )}
            >
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
