import { twMerge } from 'tailwind-merge';

// to be reimplemented using cva ~ashish
export default function TOC(props) {
  return (
    <aside className="hidden max-h-screen md:w-[150px] lg:w-[250px] xl:block">
      <p className="mb-2 text-sm font-medium">On This Page</p>
      <nav>
        <ul className="space-y-1">
          {props.headings.map((item, index) => (
            <li
              key={index}
              className={twMerge(
                'text-sm text-muted transition-colors',
                item.current && 'text-[#CC00B8]',
                item.level === 2 && 'ml-2',
                item.level === 3 && 'ml-4',
              )}
            >
              <a href={'#' + item.id} className="hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
