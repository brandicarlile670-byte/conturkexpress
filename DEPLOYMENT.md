# ConTurk production deployment

The deployment process is intentionally independent of ChatGPT, GitHub, and any ChatGPT-connected application.

Recommended production stack:

- Next.js application
- Vercel hosting
- Supabase Postgres for tracking persistence

## Stage A — Finish everything locally

From the project root:

```powershell
npm ci
npm run verify:release
npm run dev
```

Complete the public-page and tracking/admin smoke tests in `LOCAL-TESTING.md` before deploying.

## Stage B — Create the production Supabase database

Create the Supabase project in the Supabase dashboard using your own account.

Then run `supabase-schema.sql` once in the Supabase SQL Editor, or manage it through Supabase CLI migrations.

Important:

- Keep Row Level Security enabled.
- Do not add browser-facing policies for `tracking_records`.
- Use the server-only `SUPABASE_SECRET_KEY` from Next.js server code.
- Do not put the Supabase secret key in a `NEXT_PUBLIC_*` variable.
- Do not seed the four demo records into production unless you explicitly want them.

Supabase's current documentation describes secret keys as server-only credentials that bypass Row Level Security, so they must remain under your control. The older `anon`/`service_role` keys are being deprecated by the end of 2026. See the official API-key documentation for the current key model.

## Stage C — Deploy the application without GitHub

You have two local-controlled options.

### Option 1: Vercel CLI

On your own PC:

```powershell
npm install -g vercel
vercel login
vercel link
vercel deploy --prod
```

Vercel's current CLI supports direct production deployment, and Next.js is supported directly by Vercel.

### Option 2: Vercel Drop

Unzip the project on your PC and drag the project folder into `https://vercel.com/drop`.

Vercel can detect and build the Next.js application without requiring a GitHub connection.

## Stage D — Configure production environment variables

Set these in Vercel Production:

```text
CONTURK_ADMIN_EMAIL=your-real-admin-email
CONTURK_ADMIN_PASSWORD=your-long-random-password
CONTURK_ADMIN_SESSION_SECRET=your-long-random-secret
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SECRET_KEY=sb_secret_...
```

Never commit real values into the project ZIP or source control.

## Stage E — Production smoke test

After deployment, verify:

1. `/`
2. `/about-us`
3. `/services`
4. `/insurance-and-terms`
5. `/announcements`
6. `/announcements/1`
7. `/contact-us`
8. `/tracking`
9. `/admin/tracking/login`
10. `/admin/tracking`
11. `/api/health`
12. Create a production tracking record.
13. Search for it publicly through `/tracking?number=...`.
14. Edit a travel event and verify the public page updates.
15. Delete the test record and verify it disappears.

## Stage F — Connect the custom domain

After the deployment is passing smoke tests, add the final ConTurk domain in Vercel's project domain settings and update the DNS records at the domain registrar as Vercel instructs.

Only switch the production DNS after the Vercel deployment and Supabase connection have both passed the smoke tests.
