This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# ConTurk Standard Project — Tracking Integration

This package extends the existing ConTurk standard Next.js project with the internal parcel-tracking workflow and admin CRUD screens based on the four supplied HTML references.

## Routes

Public:

- `/tracking?number=CSX465028249193`

Admin:

- `/admin/tracking/login`
- `/admin/tracking`
- `/admin/tracking/add`
- `/admin/tracking/add?trackingNo=CSX465028249193`

API:

- `GET /api/tracking`
- `POST /api/tracking`
- `GET/PUT/DELETE /api/tracking/:trackingNo`
- `POST /api/admin/login`

## Demo data

Current local data store: `src/data/tracking.json`

The repository boundary is `src/lib/tracking-repository.ts`; it can later be replaced with a real SQL/Prisma adapter without changing the UI layer.

A relational production schema draft is included at `database/schema.sql`.

## Demo admin login

```text
Admin ID / Email: admin@conturk.local
Password: ConturkDemo123!
```

Use environment variables before any non-local deployment.

## Home tracking form

The homepage tracking input now routes internally to `/tracking?number=...` and reads the same demo data used by the admin screens.

## Source references

The four supplied tracking HTML files are preserved under `docs/` and are the source-of-truth references for the tracking/admin page designs.
