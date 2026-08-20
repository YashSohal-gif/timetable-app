import ThemeToggle from "@/components/ThemeToggle";
import { BATCH_NAME } from "@/lib/timetable-data";

export default function Header() {
  return (
    <header className="glass-panel flex items-center justify-between gap-4 rounded-[28px] px-5 py-4 sm:px-7 sm:py-5">
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 text-xl shadow-inner shadow-white/20">
          🗓️
        </div>
        <div>
          <h1 className="text-[22px] font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-[26px]">
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
