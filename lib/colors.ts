// Deterministic, accessible color themes per course — same course always
// gets the same color, in both light and dark mode.
export interface CourseTheme {
  bg: string;
  border: string;
  text: string;
  dot: string;
  ring: string;
}

const PALETTE: CourseTheme[] = [
  {
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-300 dark:border-sky-800",
    text: "text-sky-800 dark:text-sky-200",
    dot: "bg-sky-500",
    ring: "ring-sky-400/40",
  },
  {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-300 dark:border-violet-800",
    text: "text-violet-800 dark:text-violet-200",
    dot: "bg-violet-500",
    ring: "ring-violet-400/40",
  },
  {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-300 dark:border-amber-800",
    text: "text-amber-800 dark:text-amber-200",
    dot: "bg-amber-500",
    ring: "ring-amber-400/40",
  },
  {
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-300 dark:border-emerald-800",
    text: "text-emerald-800 dark:text-emerald-200",
    dot: "bg-emerald-500",
    ring: "ring-emerald-400/40",
  },
  {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-300 dark:border-rose-800",
    text: "text-rose-800 dark:text-rose-200",
    dot: "bg-rose-500",
    ring: "ring-rose-400/40",
  },
  {
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-300 dark:border-orange-800",
    text: "text-orange-800 dark:text-orange-200",
    dot: "bg-orange-500",
    ring: "ring-orange-400/40",
  },
  {
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-300 dark:border-teal-800",
    text: "text-teal-800 dark:text-teal-200",
    dot: "bg-teal-500",
    ring: "ring-teal-400/40",
  },
  {
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
    border: "border-fuchsia-300 dark:border-fuchsia-800",
    text: "text-fuchsia-800 dark:text-fuchsia-200",
    dot: "bg-fuchsia-500",
    ring: "ring-fuchsia-400/40",
  },
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const cache = new Map<string, CourseTheme>();
export function themeFor(code: string): CourseTheme {
  if (!cache.has(code)) {
    cache.set(code, PALETTE[hashCode(code) % PALETTE.length]);
  }
  return cache.get(code)!;
}
