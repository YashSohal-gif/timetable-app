import ThemeToggle from "@/components/ThemeToggle";
import { BATCH_NAME } from "@/lib/timetable-data";

export default function Header() {
  return (
    <header className="glass-panel flex items-center justify-between gap-4 rounded-[28px] px-5 py-4 sm:px-7 sm:py-5">
      <div className="flex items-center gap-3.5">
        <Logo />
        <div>
          <h1 className="bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-[22px] font-semibold leading-tight tracking-tight text-transparent dark:from-white dark:to-slate-400 sm:text-[26px]">
            My Timetable
          </h1>
          <p className="mt-0.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
            {BATCH_NAME} · tap any class for details
          </p>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}

function Logo() {
  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 shadow-[0_8px_20px_-4px_rgba(99,102,241,0.6)] ring-1 ring-white/40">
      {/* soft glossy highlight, like an app icon */}
      <div className="pointer-events-none absolute inset-x-1.5 top-1 h-1/2 rounded-t-xl bg-gradient-to-b from-white/35 to-transparent" />
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" className="relative">
        <rect x="3" y="4.5" width="18" height="16" rx="4" stroke="white" strokeWidth="1.7" />
        <path d="M3 9.5h18" stroke="white" strokeWidth="1.7" />
        <path d="M8 2.5v3.5M16 2.5v3.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="15.5" cy="15" r="3.6" fill="white" fillOpacity="0.95" />
        <path d="M15.5 13.1v1.9l1.3 1.1" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
