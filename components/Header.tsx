import ThemeToggle from "@/components/ThemeToggle";
import { BATCH_NAME } from "@/lib/timetable-data";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🗓️</span>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            My Timetable
          </h1>
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {BATCH_NAME} · tap any class to see the full details
        </p>
      </div>
      <ThemeToggle />
    </header>
  );
}
