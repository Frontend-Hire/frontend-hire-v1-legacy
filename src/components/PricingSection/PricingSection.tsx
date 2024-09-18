import React from 'react';
import InclusionsExclusions from '../InclusionsExclusions';
import PricingDetails from '../PricingDetails';
import { GraduationCapIcon } from 'lucide-react';
import CopyEmailOnClick from '../CopyEmailOnClick';

export default function PricingSection() {
  return (
    <section className="container flex flex-col gap-10 pb-10">
      <h2 className="text-center text-4xl font-black">Pricing</h2>
      <div className="flex flex-col-reverse justify-around gap-10 bg-card p-10 md:flex-row">
        <InclusionsExclusions />
        <div className="h-0.5 w-full rounded-full bg-white md:h-auto md:min-h-full md:w-0.5" />
        <React.Suspense>
          <PricingDetails />
        </React.Suspense>
      </div>
      <StudentPriceCallout />
    </section>
  );
}

function StudentPriceCallout() {
  return (
    <div className="flex flex-col gap-2 bg-card p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold">Student Price</h3>
        <GraduationCapIcon className="size-20" />
      </div>
      <p className="text-lg font-medium">
        Students get a flat 50% discount! All you have to do is email us at{' '}
        <CopyEmailOnClick email="info@frontendhire.com" /> with a valid student
        ID card and we will send you the discount link.
      </p>
    </div>
  );
}
