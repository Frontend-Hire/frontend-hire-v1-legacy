drop policy "Let authenticated user submit bugs" on "public"."project_bug_submissions";

drop policy "Let authenticated user do all actions" on "public"."project_submissions";

revoke delete on table "public"."project_bug_submissions" from "anon";

revoke insert on table "public"."project_bug_submissions" from "anon";

revoke references on table "public"."project_bug_submissions" from "anon";

revoke select on table "public"."project_bug_submissions" from "anon";

revoke trigger on table "public"."project_bug_submissions" from "anon";

revoke truncate on table "public"."project_bug_submissions" from "anon";

revoke update on table "public"."project_bug_submissions" from "anon";

revoke delete on table "public"."project_bug_submissions" from "authenticated";

revoke insert on table "public"."project_bug_submissions" from "authenticated";

revoke references on table "public"."project_bug_submissions" from "authenticated";

revoke select on table "public"."project_bug_submissions" from "authenticated";

revoke trigger on table "public"."project_bug_submissions" from "authenticated";

revoke truncate on table "public"."project_bug_submissions" from "authenticated";

revoke update on table "public"."project_bug_submissions" from "authenticated";

revoke delete on table "public"."project_bug_submissions" from "service_role";

revoke insert on table "public"."project_bug_submissions" from "service_role";

revoke references on table "public"."project_bug_submissions" from "service_role";

revoke select on table "public"."project_bug_submissions" from "service_role";

revoke trigger on table "public"."project_bug_submissions" from "service_role";

revoke truncate on table "public"."project_bug_submissions" from "service_role";

revoke update on table "public"."project_bug_submissions" from "service_role";

revoke delete on table "public"."project_submissions" from "anon";

revoke insert on table "public"."project_submissions" from "anon";

revoke references on table "public"."project_submissions" from "anon";

revoke select on table "public"."project_submissions" from "anon";

revoke trigger on table "public"."project_submissions" from "anon";

revoke truncate on table "public"."project_submissions" from "anon";

revoke update on table "public"."project_submissions" from "anon";

revoke delete on table "public"."project_submissions" from "authenticated";

revoke insert on table "public"."project_submissions" from "authenticated";

revoke references on table "public"."project_submissions" from "authenticated";

revoke select on table "public"."project_submissions" from "authenticated";

revoke trigger on table "public"."project_submissions" from "authenticated";

revoke truncate on table "public"."project_submissions" from "authenticated";

revoke update on table "public"."project_submissions" from "authenticated";

revoke delete on table "public"."project_submissions" from "service_role";

revoke insert on table "public"."project_submissions" from "service_role";

revoke references on table "public"."project_submissions" from "service_role";

revoke select on table "public"."project_submissions" from "service_role";

revoke trigger on table "public"."project_submissions" from "service_role";

revoke truncate on table "public"."project_submissions" from "service_role";

revoke update on table "public"."project_submissions" from "service_role";

alter table "public"."project_bug_submissions" drop constraint "project_bug_submissions_id_key";

alter table "public"."project_bug_submissions" drop constraint "project_bug_submissions_user_id_fkey1";

alter table "public"."project_submissions" drop constraint "project_submissions_user_id_fkey1";

alter table "public"."project_bug_submissions" drop constraint "project_bug_submissions_pkey";

alter table "public"."project_submissions" drop constraint "project_submissions_pkey";

drop index if exists "public"."project_bug_submissions_id_key";

drop index if exists "public"."project_bug_submissions_pkey";

drop index if exists "public"."project_submissions_pkey";

drop table "public"."project_bug_submissions";

drop table "public"."project_submissions";


