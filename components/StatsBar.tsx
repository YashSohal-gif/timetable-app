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
    { label: "Courses", value: totalCourses, icon: "📚", gradient: "from-indigo-500 to-violet-500" },
    { label: "Total Credits", value: totalCredits, icon: "🏆", gradient: "from-amber-500 to-orange-500" },
    { label: "Periods / Week", value: totalPeriods, icon: "⏱️", gradient: "from-sky-500 to-cyan-400" },
    { label: "Lab Sessions", value: labCount, icon: "🧪", gradient: "from-emerald-500 to-teal-400" },
    { label: "Periods / Day", value: PERIODS.length, icon: "📅", gradient: "from-pink-500 to-rose-400" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="glass-panel flex flex-col items-center gap-2 rounded-[22px] px-3 py-5 text-center transition duration-300 hover:-translate-y-1"
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${s.gradient} text-base shadow-sm`}
          >
            {s.icon}
          </div>
          <div className="text-[22px] font-semibold leading-none tracking-tight text-slate-900 dark:text-white">
            {s.value}
          </div>
          <div className="text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
