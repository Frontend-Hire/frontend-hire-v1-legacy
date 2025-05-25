# Frontend Hire V1

The very first version of Frontend Hire that had a custom coding workspace, lemonsqueezy and razorpay integrations, and a lot more.

This codebase is a bit raw but can be useful for some folks. Also, has some interesting patterns.

## Keeping the database structure in sync

- Always take a `supabase db pull` before starting the development.
- Apply any migrations if required using `supabase migrate up`.
- If required, also reset the database using `supabase db reset`.

## Setting up Supabase locally

We'll set up **supabase** for local development. Follow the steps below to set up supabase locally.

1. Install [Docker](https://www.docker.com/products/docker-desktop/)

2. Now install [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started) for local development. You can also work with supabase using `npx` commands. Check for Supabase CLI version before installing.

3. Get Google OAuth credentials via [Google Console](https://console.developers.google.com/) and put them in `.env` file at the project root.

```
# This is the environment file for the supabase local project
SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_ID=your_google_client_id
SUPABASE_AUTH_EXTERNAL_GOOGLE_SECRET=your_google_secret
```

4. The config file (`config.toml`) is already defined in the project.

5. Start Docker

6. Run `npx supabase start` or `supabase start` to start all services.

> Run `npx supabase status` or `supabase status` to get information regarding all supabase services. Once the docker image is being run.

> - [Supabase docs for setting up authentication locally](https://supabase.com/docs/guides/cli/local-development#use-auth-locally)
> - [Supabase docs for local development](https://supabase.com/docs/guides/cli/local-development)

---

### Setting up Frontend hire

After the successful installation of supabase locally. We can install and run frontend-hire. Follow the steps:

1. Install dependencies: `pnpm install`

2. Create the `.env.local` which should have the following keys for the supabase backend. These should remain the same for every local supabase development environment.

```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
```

The keys are displayed when you start the supabase service or you can get them by running command `npx supabase status`.

3. Once all things are in their respective places, start the application using `pnpm dev`.
