import { Button } from '@/components/ui/button';
import { BanIcon, CheckCircle2Icon } from 'lucide-react';

const INCLUSIONS = [
  'Full Access To PRO Content',
  'Free Updates',
  'Exclusive Courses',
  'Simulated Interviews',
  'Frontend System Design (Coming Soon)',
  'Text/Video Solutions To Coding Questions (Coming Soon)',
  'More New Features',
];

const EXCLUSIONS = ['Hiring Profiles (Still in ideation phase)'];

export default function PricingSection() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-4xl font-black">Pricing</h2>
      <div className="flex flex-col-reverse justify-between gap-10 bg-card p-10 md:flex-row">
        <InclusionsExclusions />
        <div className="h-0.5 w-full rounded-full bg-white md:h-auto md:min-h-full md:w-0.5" />
        <div className="flex flex-col items-center justify-between gap-5 text-center">
          <h3 className="text-stroke text-4xl uppercase tracking-widest text-card">
            Launch Price till June 1st
          </h3>
          <p className="text-xs font-bold text-muted">
            Regional price is automatically applied.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-3xl font-black md:text-5xl">₹2,500</p>
            <p className="text-lg font-bold text-muted md:text-xl">
              <s className="text-xl md:text-2xl">₹3,000</s> after June 1st
            </p>
            <p className="text-lg font-bold text-muted md:text-xl">
              <s className="text-xl md:text-2xl">₹5,000</s> after 200 paid users
            </p>
          </div>
          <div className="w-full space-y-2">
            <Button className="h-fit w-full p-2 text-xl font-bold md:p-3 md:text-2xl">
              Become PRO
            </Button>
            <p className="text-xs font-bold text-muted">
              Pricing will increase as more content gets added! So, become a PRO
              now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InclusionsExclusions() {
  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-3">
        {INCLUSIONS.map((item) => (
          <li key={item}>
            <IncludedItem>{item}</IncludedItem>
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
