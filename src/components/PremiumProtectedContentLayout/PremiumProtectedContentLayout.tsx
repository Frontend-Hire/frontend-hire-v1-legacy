import Heading from '@/components/Heading';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import Link from 'next/link';

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
    <div className="flex w-full flex-col items-center gap-4 py-10">
      <Heading variant="h1">Get access to Pro content</Heading>
      <p>
        This content is exclusive to pro users. We have not yet launched our
        official offering.
      </p>
      <p>
        Mail us at{' '}
        <Link
          className="text-link underline"
          href="mailto:info@frontendhire.com"
        >
          info@frontendhire.com
        </Link>{' '}
        to request pre-launch access at the lowest price.
      </p>
    </div>
  );
}
