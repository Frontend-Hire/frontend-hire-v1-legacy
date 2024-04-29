## Getting Started

The project has two moving pieces in total:

1. the [`frontend-hire`](https://github.com/yaralahruthik/frontend-hire) repo and
2. the [`frontend-hire-supabase-local`](https://github.com/yaralahruthik/frontend-hire-supabase-local) repo.

### Setting up Supabase locally

We'll set up **supabase** first of all before starting the project.
Clone **frontend-hire-supabase-local** repo and start:

1. Install [Docker](https://www.docker.com/products/docker-desktop/)

2. Now install [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started) for local development. You can also work out supabase with npx commands.
   Check for Supabase CLI version before installing.

3. Get Google OAuth credentials via [Google Console](https://console.developers.google.com/)

4. Clone the repo: https://github.com/yaralahruthik/frontend-hire-supabase-local

5. Config file is already defined in the project.

6. Start Docker

7. Run `npx supabase start` or `supabase start` to start all services.

> Run `npx supabase status` or `supabase status` to get information regarding all supabase services. Once the docker image is being run.

> - [Supabase docs for setting up authentication locally](https://supabase.com/docs/guides/cli/local-development#use-auth-locally)
> - [Supabase docs for local development](https://supabase.com/docs/guides/cli/local-development)

---

### Setting up Frontend hire

After successful installation of supabase locally. We can install and run frontend-hire. Follow the steps:

1. Clone the repo: https://github.com/yaralahruthik/frontend-hire.git

2. Install dependencies: `npm install`

3. Create the `.env.local` which should have the following keys for the supabase backend.

   ```
   	NEXT_PUBLIC_SUPABASE_URL = <supabase API URL>
   	NEXT_PUBLIC_SUPABASE_ANON_KEY = <supabase anon key>
   ```

   The keys are displayed when you start the supabase service or you can get them by running command `npx supabase status`.

4. Once all things are in there respective places, start the application using `npm run dev`.
