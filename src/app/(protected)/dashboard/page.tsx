import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import WelcomeMessage from './_components/WelcomeMessage';
import Overview from './_components/Overview';

export default async function Dashboard() {
  const cookieStore = cookies();
  const supabaseServerClient = createServerComponentClient({
    cookies: () => cookieStore,
  });
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
