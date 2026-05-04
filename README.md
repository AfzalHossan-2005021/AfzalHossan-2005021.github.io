# Afzal Hossan Portfolio (Next.js)

Premium, recruiter-ready personal portfolio built with:

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Lucide React icons

This version is generated from public GitHub profile/repository data for `AfzalHossan-2005021`, while keeping unknown details as explicit placeholders.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open:
   `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: `Next.js` (auto-detected).
4. Build command: `npm run build` (default).
5. Output: `.next` (handled automatically by Vercel).
6. Deploy.

## Deployment (GitHub Pages with your existing custom domain)

This project is configured for static export (`output: "export"`), so you can keep using your existing domain `https://afzal-hossan.me/` on GitHub Pages as well.

Automatic deploy is configured via GitHub Actions in:
`/.github/workflows/deploy-pages.yml`

One-time repo settings:

1. Go to `Repository Settings -> Pages`.
2. Set `Source` to `GitHub Actions`.
3. In `Custom domain`, set `afzal-hossan.me` and save.
4. Ensure your DNS for `afzal-hossan.me` points to GitHub Pages (A/AAAA or CNAME records as appropriate).

After this setup, every push to `main` will rebuild and publish automatically.

## Content Source

Primary structured content is in:

- `data/portfolio.ts`

Update this file to edit:

- hero copy
- skills
- featured projects
- timeline entries
- contact links

## Placeholders You Should Fill

- `profile.resumeUrl` in `data/portfolio.ts`
- `contact.resumeUrl` in `data/portfolio.ts`
- optional testimonials (currently intentionally placeholder-only)
- professional experience details (currently explicit placeholder card)

## Accessibility and UX Notes

- Dark mode default, light mode toggle enabled
- Keyboard-friendly focus rings and skip link
- Responsive layout for desktop/tablet/mobile
- Smooth scrolling + section reveal animations
- Truthful copy with no fabricated jobs/degrees/certifications/testimonials
