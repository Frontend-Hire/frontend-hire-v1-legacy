import WelcomeMessage from './_components/WelcomeMessage';
import Overview from './_components/Overview';
import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function Dashboard() {
  const supabaseServerClient = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return (
    <main className="flex flex-col gap-2 px-4">
      <WelcomeMessage userName={user?.user_metadata?.name} />
      <Overview />
    </main>
  );
}
