import { COURSES, GRID, PERIODS } from "@/lib/timetable-data";

export default function StatsBar() {
  const totalCourses = Object.keys(COURSES).length;
  const totalCredits = Object.values(COURSES).reduce((sum, c) => sum + c.credit, 0);
  const totalPeriods = Object.values(GRID).reduce(
    (sum, row) => sum + row.filter(Boolean).length,
    0,
  );
  const labCount = Object.values(COURSES).filter((c) => c.code.endsWith("L")).length;

  const stats = [
    { label: "Courses", value: totalCourses, icon: "📚" },
    { label: "Total Credits", value: totalCredits, icon: "🏆" },
    { label: "Periods / Week", value: totalPeriods, icon: "⏱️" },
    { label: "Lab Sessions", value: labCount, icon: "🧪" },
    { label: "Periods / Day", value: PERIODS.length, icon: "📅" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-black/5 bg-white/70 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <div className="text-2xl">{s.icon}</div>
          <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {s.value}
          </div>
          <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
