alter table "public"."bug_submissions" drop constraint "bug_submissions_user_id_fkey";

alter table "public"."code_history" drop constraint "code_history_user_id_fkey";

alter table "public"."code_submissions" drop constraint "code_submissions_user_id_fkey";

alter table "public"."project_bug_submissions" drop constraint "project_bug_submissions_user_id_fkey";

alter table "public"."project_submissions" drop constraint "project_submissions_user_id_fkey";

alter table "public"."bug_submissions" add constraint "bug_submissions_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."bug_submissions" validate constraint "bug_submissions_user_id_fkey1";

alter table "public"."code_history" add constraint "code_history_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."code_history" validate constraint "code_history_user_id_fkey1";

alter table "public"."code_submissions" add constraint "code_submissions_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."code_submissions" validate constraint "code_submissions_user_id_fkey1";

alter table "public"."project_bug_submissions" add constraint "project_bug_submissions_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."project_bug_submissions" validate constraint "project_bug_submissions_user_id_fkey1";

alter table "public"."project_submissions" add constraint "project_submissions_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."project_submissions" validate constraint "project_submissions_user_id_fkey1";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  insert into public.users(id, email, display_name, avatar_url)
  values(
    new.id,
    new.raw_user_meta_data ->> 'email',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;$function$
;

CREATE OR REPLACE FUNCTION public.delete_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  delete from public.users where id = OLD.id;

  return OLD;
end;$function$
;


