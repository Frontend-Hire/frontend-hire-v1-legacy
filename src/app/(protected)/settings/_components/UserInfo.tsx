import createSupabaseServerClient from '@/lib/supabase/supabaseServerClient';

export default async function UserInfo() {
  const supabaseServerClient = createSupabaseServerClient();

  const { data } = await supabaseServerClient
    .from('users')
    .select('email, has_pro_access')
    .limit(1)
    .single();

  return (
    <div className="space-y-2">
      <p className="text-gray-300">
        You are logged in as:{' '}
        <span className="bg-secondary p-1 font-bold text-foreground">
          {data?.email}
        </span>
      </p>

      <p className="text-gray-300">
        You have access to:{' '}
        <span className="bg-secondary p-1 font-bold text-foreground">
          {data?.has_pro_access ? 'Pro Content' : 'Free Content Only'}
        </span>
      </p>
    </div>
  );
}
