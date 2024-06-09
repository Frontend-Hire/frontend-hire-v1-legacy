import BecomeProButton from '@/components/BecomeProButton';
import { getPurchasePower } from '@/lib/getPurchasePower';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { BanIcon, CheckCircle2Icon, ConstructionIcon } from 'lucide-react';
import SignInButton from '../SignInButton';

const INCLUSIONS = [
  'Full Access To PRO Content',
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

const EXCLUSIONS = ['Hiring Profiles (Still in ideation phase)'];

export default function PricingSection() {
  return (
    <section className="container flex flex-col gap-10 pb-20">
      <h2 className="text-center text-4xl font-black">Pricing</h2>
      <div className="flex flex-col-reverse justify-between gap-10 bg-card p-10 md:flex-row">
        <InclusionsExclusions />
        <div className="h-0.5 w-full rounded-full bg-white md:h-auto md:min-h-full md:w-0.5" />
        <PricingDetails />
      </div>
    </section>
  );
}

async function PricingDetails() {
  const { name, currencySymbol, curPrice, curPrice2 } =
    await getPurchasePower();

  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-between gap-5 text-center">
      <h3 className="text-stroke text-4xl uppercase tracking-widest text-card">
        Launch Price till June 1st
      </h3>
      {name !== 'United States' && (
        <p className="text-xs font-bold text-blue-400">
          Purchase Power Parity{' '}
          {name !== 'Rest of the world' ? `for ${name}` : ''} is automatically
          applied.
        </p>
      )}
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-3xl font-black md:text-5xl">
          {currencySymbol}
          {curPrice}
        </p>
        <p className="text-lg font-bold text-muted md:text-xl">
          <span className="text-xl md:text-2xl">
            {currencySymbol}
            {curPrice2}
          </span>{' '}
          after 100 paying customers
        </p>
      </div>
      <div className="w-full space-y-2">
        {!user && (
          <p className="text-sm font-bold text-muted">
            We will first sign you in before making a purchase!
          </p>
        )}
        <BecomeProButton />
        <p className="text-xs font-bold text-muted">
          Pricing will increase as more content gets added!
        </p>
      </div>
    </div>
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
