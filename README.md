# Anamika V P: Portfolio

A fast, single-page portfolio for a full stack developer with a QA mindset. Content is drawn from a résumé and LinkedIn profile, and everything is editable in one data file.

**Suggested repository name:** `anamika-vp-portfolio`

## Tech stack

- Next.js 14 (App Router) and React 18
- Tailwind CSS 3 with a class-based dark mode (remembers the visitor's choice)
- TypeScript
- No API keys or environment variables

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3001. For a production build, run `npm run build` then `npm start`.

## Customize

All text lives in `data/portfolio.ts`:

- `profile`: name, headline, positioning line, about text, contact details, links. Add your GitHub URL to `github` and it appears in the Contact section.
- `projects`, `experience`, `skills`, `education`, `certifications`, `achievements`: add, remove or reorder items.

Colors and fonts are in `tailwind.config.ts`. Section layout is in `components/`.

## Structure

```
app/            layout, page, global styles
components/     one component per section, plus Navbar and ThemeToggle
data/           portfolio.ts (all content)
```

## Deploy

Push to GitHub and import the repository in Vercel (or any Next.js host). No configuration is needed.
