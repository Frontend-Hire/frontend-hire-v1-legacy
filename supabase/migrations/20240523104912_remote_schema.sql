create policy "Authenticated users can read their user profile"
on "public"."users"
as permissive
for select
to authenticated
using ((( SELECT auth.uid() AS uid) = id));



