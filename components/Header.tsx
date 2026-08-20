import ThemeToggle from "@/components/ThemeToggle";
import { BATCH_NAME } from "@/lib/timetable-data";

export default function Header() {
  return (
    <header className="glass-panel flex items-center justify-between gap-4 rounded-[28px] px-5 py-4 sm:px-7 sm:py-5">
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 text-xl shadow-[0_6px_18px_-4px_rgba(99,102,241,0.55)] ring-1 ring-white/40">
          🗓️
        </div>
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
