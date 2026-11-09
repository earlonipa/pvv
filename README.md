# PVV Ship Repair & Marine Services

Company website for PVV, built with Next.js (App Router) and deployed to
**Cloudflare Workers** via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare),
with a **Cloudflare D1** database.

| Route            | Notes                                                        |
| ---------------- | ------------------------------------------------------------ |
| `/`              | Home                                                         |
| `/services`      | Service catalogue (static data in `src/app/services/page.tsx`) |
| `/clients`       | Client list, read from the D1 `clients` table                |
| `/contact`       | Contact details, map and contact form                        |
| `POST /api/inquiries` | Stores contact-form messages in the D1 `inquiries` table |

## First-time setup

```bash
npm install
npx wrangler login

# 1. create the database and paste the printed database_id into wrangler.jsonc
npx wrangler d1 create pvv-db

# 2. create the tables and seed the clients (local + production)
npm run db:migrate:local
npm run db:migrate:remote
```

## Development

```bash
npm run dev        # Next.js dev server, uses the local D1 (.wrangler/state)
npm run preview    # build with OpenNext and run it in the Workers runtime locally
npm run deploy     # build and deploy to Cloudflare
npm run cf-typegen # regenerate cloudflare-env.d.ts after changing wrangler.jsonc
```

## Database

Schema and seed data live in `migrations/`. Add new changes as a new numbered
`.sql` file and run `npm run db:migrate:remote`.

```bash
# read contact-form submissions
npx wrangler d1 execute DB --remote \
  --command "SELECT id, created_at, name, email, phone, vessel, message FROM inquiries ORDER BY id DESC LIMIT 50"

# add / change a client
npx wrangler d1 execute DB --remote \
  --command "INSERT INTO clients (name, category, sort_order) VALUES ('New Client Inc.', 'Shipping', 21)"
```

## Deployment

- **Manual:** `npm run deploy`.
- **GitHub Actions:** `.github/workflows/deploy.yml` applies migrations and deploys on every
  push to `main`. Add the repository secrets `CLOUDFLARE_API_TOKEN` (Workers + D1 edit
  permissions) and `CLOUDFLARE_ACCOUNT_ID`.
- **Custom domain:** Workers & Pages → `pvv` → Settings → Domains & Routes → add `pvvmarineserv.com`.

## Project layout

```
migrations/            D1 schema + seed
public/                static assets (images are pre-optimised .webp)
src/app/               routes, metadata, sitemap/robots/manifest
src/components/        TopBar, Footer, ContactForm
src/lib/               site constants, D1 queries, form validation
wrangler.jsonc         Worker, assets and D1 binding
open-next.config.ts    OpenNext adapter config
```

Business details (phones, email, address, hours, map coordinates) are defined once in
`src/lib/site.ts`.
