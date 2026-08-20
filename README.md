# 🗓️ My Timetable

A clean, interactive weekly class timetable, built with **Next.js**, **React**, **TypeScript** and **Tailwind CSS**.

Live site: _set after first deploy — see badge/URL below once GitHub Pages finishes building._

## ✨ Features

- **Weekly grid view** — every class laid out by day and period, just like a real timetable, with consecutive periods (like labs) merged into one block.
- **Mobile agenda view** — on small screens the grid becomes a day-by-day swipeable list instead of a squished table.
- **Tap for details** — tap/click any class to see its faculty, room, building, floor and credit count.
- **Course cards** — every course summarized with faculty, slot and location.
- **Live stats** — total courses, credits, weekly periods and lab sessions at a glance.
- **Dark mode** — toggle in the header, remembers your choice.
- **100% static** — no backend, no database. Just data → React → HTML.

## 🧠 How it's built (in plain English)

- `lib/timetable-data.ts` — all your classes, times and course info, written as plain JavaScript objects (like a big organized list).
- `components/` — small reusable building blocks (the grid, the course cards, the header, the popup with details). Think of them like Lego bricks that snap together to make the page.
- `app/page.tsx` — the main page that puts all the Lego bricks together in order.
- Tailwind CSS classes (the little words like `rounded-2xl` or `bg-sky-50`) style everything without writing separate CSS files.

## 🛠️ Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## 🚀 Deployment

This repo auto-deploys to **GitHub Pages** every time you push to `main`, via the workflow in
`.github/workflows/deploy.yml`. It builds the site as static HTML (`next build` with
`output: "export"`) and publishes the `out/` folder.

To enable it on a fresh repo (one-time): **Settings → Pages → Source → GitHub Actions**.

## ✏️ Updating your timetable

Everything lives in one file: `lib/timetable-data.ts`.

- `PERIODS` — the time slots (start/end times).
- `COURSES` — one entry per course code, with name, credits, faculty and room.
- `GRID` — which course code sits in which day + period.

Change the data, push to `main`, and the live site updates automatically.
