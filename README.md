# Keeping Up With The Robots

Western Mass AI newsletter & community — a practical, no-hype local dispatch for small business owners, creators, operators, and builders in the Pioneer Valley.

## Stack

- Next.js (App Router) + Tailwind CSS v4
- Newsletter signups via Resend (`RESEND_API_KEY`, `RESEND_AUDIENCE_ID`)
- Contact form via Resend (`CONTACT_EMAIL` optional override)

## Develop

```bash
npm run dev
```

Without Resend env vars, form submissions log to the console and still report success (dev mode).
