import Heading from '@/components/Heading';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import PricingDetails from '../PricingDetails';
import InclusionsExclusions from '../InclusionsExclusions';
import FAQSection from '../FAQSection';

export default async function PremiumProtectedContentLayout({
  children,
}: React.PropsWithChildren) {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('users')
    .select('has_pro_access')
    .limit(1)
    .single();

  if (data?.has_pro_access) {
    return <>{children}</>;
  }

  return (
    <div className="flex w-full flex-col items-center gap-10 py-10">
      <Heading variant="h1">This content is exclusively for pro users</Heading>
      <div className="space-y-10 rounded bg-card p-4">
        <PricingDetails />
        <div className="h-0.5 w-full rounded-full bg-white md:h-auto md:min-h-full md:w-0.5" />
        <InclusionsExclusions />
      </div>
      <FAQSection />
    </div>
  );
}
