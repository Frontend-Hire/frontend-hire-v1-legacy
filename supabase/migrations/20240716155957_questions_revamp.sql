drop policy "Let authenticated users submit the files related to the bug" on "public"."bug_files";

drop policy "Let authenticated users insert bugs" on "public"."bug_submissions";

drop policy "Let user do all actions on files" on "public"."code_submission_files";

drop policy "Let user do all actions on code_submissions" on "public"."code_submissions";

revoke delete on table "public"."bug_files" from "anon";

revoke insert on table "public"."bug_files" from "anon";

revoke references on table "public"."bug_files" from "anon";

revoke select on table "public"."bug_files" from "anon";

revoke trigger on table "public"."bug_files" from "anon";

revoke truncate on table "public"."bug_files" from "anon";

revoke update on table "public"."bug_files" from "anon";

revoke delete on table "public"."bug_files" from "authenticated";

revoke insert on table "public"."bug_files" from "authenticated";

revoke references on table "public"."bug_files" from "authenticated";

revoke select on table "public"."bug_files" from "authenticated";

revoke trigger on table "public"."bug_files" from "authenticated";

revoke truncate on table "public"."bug_files" from "authenticated";

revoke update on table "public"."bug_files" from "authenticated";

revoke delete on table "public"."bug_files" from "service_role";

revoke insert on table "public"."bug_files" from "service_role";

revoke references on table "public"."bug_files" from "service_role";

revoke select on table "public"."bug_files" from "service_role";

revoke trigger on table "public"."bug_files" from "service_role";

revoke truncate on table "public"."bug_files" from "service_role";

revoke update on table "public"."bug_files" from "service_role";

revoke delete on table "public"."bug_submissions" from "anon";

revoke insert on table "public"."bug_submissions" from "anon";

revoke references on table "public"."bug_submissions" from "anon";

revoke select on table "public"."bug_submissions" from "anon";

revoke trigger on table "public"."bug_submissions" from "anon";

revoke truncate on table "public"."bug_submissions" from "anon";

revoke update on table "public"."bug_submissions" from "anon";

revoke delete on table "public"."bug_submissions" from "authenticated";

revoke insert on table "public"."bug_submissions" from "authenticated";

revoke references on table "public"."bug_submissions" from "authenticated";

revoke select on table "public"."bug_submissions" from "authenticated";

revoke trigger on table "public"."bug_submissions" from "authenticated";

revoke truncate on table "public"."bug_submissions" from "authenticated";

revoke update on table "public"."bug_submissions" from "authenticated";

revoke delete on table "public"."bug_submissions" from "service_role";

revoke insert on table "public"."bug_submissions" from "service_role";

revoke references on table "public"."bug_submissions" from "service_role";

revoke select on table "public"."bug_submissions" from "service_role";

revoke trigger on table "public"."bug_submissions" from "service_role";

revoke truncate on table "public"."bug_submissions" from "service_role";

revoke update on table "public"."bug_submissions" from "service_role";

revoke delete on table "public"."code_submission_files" from "anon";

revoke insert on table "public"."code_submission_files" from "anon";

revoke references on table "public"."code_submission_files" from "anon";

revoke select on table "public"."code_submission_files" from "anon";

revoke trigger on table "public"."code_submission_files" from "anon";

revoke truncate on table "public"."code_submission_files" from "anon";

revoke update on table "public"."code_submission_files" from "anon";

revoke delete on table "public"."code_submission_files" from "authenticated";

revoke insert on table "public"."code_submission_files" from "authenticated";

revoke references on table "public"."code_submission_files" from "authenticated";

revoke select on table "public"."code_submission_files" from "authenticated";

revoke trigger on table "public"."code_submission_files" from "authenticated";

revoke truncate on table "public"."code_submission_files" from "authenticated";

revoke update on table "public"."code_submission_files" from "authenticated";

revoke delete on table "public"."code_submission_files" from "service_role";

revoke insert on table "public"."code_submission_files" from "service_role";

revoke references on table "public"."code_submission_files" from "service_role";

revoke select on table "public"."code_submission_files" from "service_role";

revoke trigger on table "public"."code_submission_files" from "service_role";

revoke truncate on table "public"."code_submission_files" from "service_role";

revoke update on table "public"."code_submission_files" from "service_role";

revoke delete on table "public"."code_submissions" from "anon";

revoke insert on table "public"."code_submissions" from "anon";

revoke references on table "public"."code_submissions" from "anon";

revoke select on table "public"."code_submissions" from "anon";

revoke trigger on table "public"."code_submissions" from "anon";

revoke truncate on table "public"."code_submissions" from "anon";

revoke update on table "public"."code_submissions" from "anon";

revoke delete on table "public"."code_submissions" from "authenticated";

revoke insert on table "public"."code_submissions" from "authenticated";

revoke references on table "public"."code_submissions" from "authenticated";

revoke select on table "public"."code_submissions" from "authenticated";

revoke trigger on table "public"."code_submissions" from "authenticated";

revoke truncate on table "public"."code_submissions" from "authenticated";

revoke update on table "public"."code_submissions" from "authenticated";

revoke delete on table "public"."code_submissions" from "service_role";

revoke insert on table "public"."code_submissions" from "service_role";

revoke references on table "public"."code_submissions" from "service_role";

revoke select on table "public"."code_submissions" from "service_role";

revoke trigger on table "public"."code_submissions" from "service_role";

revoke truncate on table "public"."code_submissions" from "service_role";

revoke update on table "public"."code_submissions" from "service_role";

alter table "public"."bug_files" drop constraint "bug_files_bug_id_fkey";

alter table "public"."bug_files" drop constraint "bug_files_id_key";

alter table "public"."bug_submissions" drop constraint "bug_submissions_id_key";

alter table "public"."bug_submissions" drop constraint "bug_submissions_user_id_fkey1";

alter table "public"."code_submission_files" drop constraint "code_submission_files_code_submission_id_fkey";

alter table "public"."code_submission_files" drop constraint "files_id_key";

alter table "public"."code_submissions" drop constraint "code_submissions_id_key";

alter table "public"."code_submissions" drop constraint "code_submissions_user_id_fkey1";

alter table "public"."bug_files" drop constraint "bug_files_pkey";

alter table "public"."bug_submissions" drop constraint "bugs_pkey";

alter table "public"."code_submission_files" drop constraint "files_pkey";

alter table "public"."code_submissions" drop constraint "code_submissions_pkey";

drop index if exists "public"."bug_files_id_key";

drop index if exists "public"."bug_files_pkey";

drop index if exists "public"."bug_submissions_id_key";

drop index if exists "public"."bugs_pkey";

drop index if exists "public"."code_submissions_id_key";

drop index if exists "public"."code_submissions_pkey";

drop index if exists "public"."files_id_key";

drop index if exists "public"."files_pkey";

drop table "public"."bug_files";

drop table "public"."bug_submissions";

drop table "public"."code_submission_files";

drop table "public"."code_submissions";

alter table "public"."code_history" add column "is_solved" boolean;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.save_code_history(p_question_id text, p_code_history json, p_is_solved boolean)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
declare
  v_id int;
  v_file_name text;
  v_code text;
begin
  -- Check if a record already exists for this question_id
  select id into v_id from code_history
  where question_id = p_question_id;

  if v_id is null then
    -- If no record exists, insert a new one
    insert into code_history (question_id, is_solved)
    values (p_question_id, p_is_solved)
    returning id into v_id;
  else
    -- If a record exists, update it
    update code_history 
    set is_solved = p_is_solved
    where id = v_id;
  end if;

  -- Delete existing files for this code_history_id
  delete from code_history_files
  where code_history_id = v_id;

  -- Insert new files
  for v_file_name, v_code in select * from json_each_text(p_code_history)
  loop
    insert into code_history_files (file_name, code, code_history_id)
    values (v_file_name, v_code, v_id);
  end loop;

end;
$function$
;


