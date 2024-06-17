import InclusionsExclusions from '../InclusionsExclusions';
import PricingDetails from '../PricingDetails';

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
