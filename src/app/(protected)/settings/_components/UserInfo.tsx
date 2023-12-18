import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function UserInfo() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return (
    <p className="text-center text-muted">
      You are logged in as:{' '}
      <span className="bg-secondary p-1 font-bold text-foreground">
        {session?.user.email}
      </span>
    </p>
  );
}
