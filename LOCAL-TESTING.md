# ConTurk local release workflow

This project is designed to be fully tested on a developer PC before anything is deployed online.

## 1. Install the project

From the project root:

```powershell
npm ci
```

## 2. Run the structural check

```powershell
npm run verify:project
```

This checks required files and the local demo tracking data without printing secrets.

## 3. Run the application

```powershell
npm run dev
```

Open `http://localhost:3000`.

## 4. Test the public site

Verify:

- `/`
- `/about-us`
- `/services`
- `/insurance-and-terms`
- `/announcements`
- `/announcements/1`
- `/contact-us`
- `/tracking`

Test the tracking form with a demo number from `src/data/tracking.json`, then test an unknown number.

## 5. Test the admin flow locally

The local development fallback credentials are:

```text
Email: admin@conturk.local
Password: ConturkDemo123!
```

Use:

- `/admin/tracking/login`
- `/admin/tracking`
- `/admin/tracking/add`

Create a demo record, edit it, add/edit/delete a travel event, then delete the record.

## 6. Run the release check

```powershell
npm run verify:release
```

This runs the structure check, ESLint, and the Next.js production build.

Do not treat the site as ready for deployment until this command exits successfully.

## Optional: local Supabase database

The app works without a database by using `src/data/tracking.json`, which is useful for ordinary frontend development.

For a local database test that matches production, install Docker Desktop and the Supabase CLI. The current Supabase CLI supports a complete local Postgres/Supabase stack through Docker. Run `supabase init`, then `supabase start`, from the project root. See the official local-development documentation for the current installation commands.

After the local stack is running, configure the project's server-only `SUPABASE_URL` and `SUPABASE_SECRET_KEY` to the local values reported by the CLI, then run the schema migration and test the same admin/public tracking workflow against Postgres.
