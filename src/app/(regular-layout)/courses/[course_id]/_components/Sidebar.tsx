import { twMerge } from 'tailwind-merge';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Teams', current: false, href: '#' },
  { name: 'Projects', current: false, href: '#' },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
];

// to be reimplemented using cva ~ashish
export default function Example() {
  return (
    <div className="flex flex-col gap-y-5 overflow-y-auto px-6 lg:min-w-64">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="space-y-1">
              {navigation.map((item, index) => (
                <li
                  key={index}
                  className={twMerge(
                    'rounded p-1 px-1.5 transition-colors',
                    item.current && 'bg-primary/50 text-ring',
                    !item.current && 'hover:bg-primary/25',
                  )}
                >
                  <a href="#">{item.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
