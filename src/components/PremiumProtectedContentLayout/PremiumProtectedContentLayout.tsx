import Heading from '@/components/Heading';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { Button } from '../ui/button';

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
    <>
      <div className="flex flex-col gap-4">
        <Heading variant="h1">Get access to pro content</Heading>
        <p>This content is only available to pro users. Get Pro Now.</p>
        <Button>Get Pro</Button>
      </div>
    </>
  );
}
