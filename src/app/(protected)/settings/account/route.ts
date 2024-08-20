import getSupabaseServerClient from '@/lib/supabase/supabaseServerClient';
import { createClient } from '@supabase/supabase-js';

export const DELETE = async (request: Request) => {
  const supabase = getSupabaseServerClient();

  const { data: user } = await supabase.auth.getSession();

  if (!user) {
    return Response.json({ message: 'Not Authenticated!' });
  }

  const { id } = (await request.json()) as { id: string };

  const supabaseAdminClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  const adminAuthClient = supabaseAdminClient.auth.admin;

  await adminAuthClient.deleteUser(id);

  return Response.json({ message: 'Account Deleted!' });
};
