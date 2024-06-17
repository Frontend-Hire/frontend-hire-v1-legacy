import { BanIcon, CheckCircle2Icon, ConstructionIcon } from 'lucide-react';

const INCLUSIONS = [
  'Forever Full Access To PRO Content',
  'Free Updates',
  'Exclusive Courses',
  'Simulated Phone Screening',
];

const COMING_SOON = [
  'More Simulated Interview Types',
  'Frontend System Design',
  'Text/Video Solutions To Coding Questions',
  'More New Features',
];

const EXCLUSIONS = ['Hiring Profiles'];

export default function InclusionsExclusions() {
  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-3">
        {INCLUSIONS.map((item) => (
          <li key={item}>
            <IncludedItem>{item}</IncludedItem>
          </li>
        ))}
        {COMING_SOON.map((item) => (
          <li key={item}>
            <ComingSoonItem>{item}</ComingSoonItem>
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold text-muted">What&apos;s Not Included?</p>
      <ul className="flex flex-col gap-5">
        {EXCLUSIONS.map((item) => (
          <li key={item}>
            <ExcludedItem>{item}</ExcludedItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComingSoonItem({ children }: React.PropsWithChildren) {
  return (
    <div className="flex gap-3 font-medium">
      <ConstructionIcon className="shrink-0 text-medium" />
      {children}
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

function ExcludedItem({ children }: React.PropsWithChildren) {
  return (
    <div className="flex gap-3 font-medium">
      <BanIcon className="shrink-0 text-hard" />
      {children}
    </div>
  );
}
