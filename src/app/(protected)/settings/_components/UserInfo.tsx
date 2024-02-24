import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function UserInfo() {
  const supabaseServerClient = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  return (
    <p className="text-gray-300">
      You are logged in as:{' '}
      <span className="bg-secondary p-1 font-bold text-foreground">
        {user?.email}
      </span>
    </p>
  );
}
