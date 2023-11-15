import { createClient } from '@supabase/supabase-js';

export const DELETE = async (request: Request) => {
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
