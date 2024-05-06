alter table "public"."users" drop constraint "users_email_key";

alter table "public"."users" drop constraint "users_id_key";

drop index if exists "public"."users_email_key";

drop index if exists "public"."users_id_key";

alter table "public"."users" drop column "confirmed_at";

alter table "public"."users" drop column "email_confirmed_at";

alter table "public"."users" drop column "last_sign_in_at";

alter table "public"."users" drop column "raw_app_meta_data";

alter table "public"."users" drop column "raw_user_meta_data";

alter table "public"."users" drop column "updated_at";

alter table "public"."users" add column "avatar_url" text;

alter table "public"."users" add column "display_name" text;

alter table "public"."users" alter column "created_at" drop not null;

alter table "public"."users" alter column "email" drop not null;

alter table "public"."users" alter column "id" set data type uuid using "id"::uuid;


