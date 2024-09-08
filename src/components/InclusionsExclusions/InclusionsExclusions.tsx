import { CheckCircle2Icon } from 'lucide-react';

const INCLUSIONS = [
  'Lifetime Access to All PRO Content',
  'Regular Updates and New Features',
  'Exclusive Feature Focused Courses',
  'Comprehensive Frontend System Design',
  'Well Researched Coding and Theory Questions',
  'Simulated Phone Screening',
  'Access to Premium Webinars',
];

export default function InclusionsExclusions() {
  return (
    <div className="flex flex-col gap-5 sm:items-center sm:justify-center">
      <ul className="flex flex-col gap-3">
        {INCLUSIONS.map((item) => (
          <li key={item}>
            <IncludedItem>{item}</IncludedItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IncludedItem({ children }: React.PropsWithChildren) {
  return (
    <div className="flex gap-3 font-medium">
      <CheckCircle2Icon className="shrink-0 text-easy" />
      {children}
    </div>
  );
}
