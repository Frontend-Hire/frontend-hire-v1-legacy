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
    <div className="flex flex-col gap-y-5 overflow-y-auto px-6 text-sm lg:min-w-64">
      <h1>On This Page</h1>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="space-y-1">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={twMerge(
                'rounded p-1 px-1.5 transition-colors',
                item.current && 'text-ring',
                item.level === 2 && 'ml-4',
                item.level === 3 && 'ml-8',
              )}
            >
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
