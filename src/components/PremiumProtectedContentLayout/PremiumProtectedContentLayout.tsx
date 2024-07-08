import Heading from '@/components/Heading';
import PricingDetails from '../PricingDetails';
import InclusionsExclusions from '../InclusionsExclusions';
import FAQSection from '../FAQSection';
import { checkIsProUser } from '@/lib/isProUser';

export default async function PremiumProtectedContentLayout({
  children,
}: React.PropsWithChildren) {
  const isProUser = await checkIsProUser();

  if (isProUser) {
    return <>{children}</>;
  }

  if (process.env.NODE_ENV === 'development') {
    return <>{children}</>;
  }

  return (
    <div className="flex w-full flex-col items-center gap-10 py-10">
      <Heading variant="h1">This content is exclusively for pro users</Heading>
      <div className="space-y-10 rounded bg-card p-4">
        <PricingDetails />
        <div className="h-0.5 w-full rounded-full bg-white" />
        <InclusionsExclusions />
      </div>
      <FAQSection />
    </div>
  );
}
