"use client";

import { useMemo, useState } from "react";
import { COURSES, DAYS, GRID, PERIODS, type DayName } from "@/lib/timetable-data";
import { themeFor } from "@/lib/colors";
import { formatTime } from "@/lib/format";

// merges consecutive identical course codes in a day's row into blocks,
// so a 4-period lab renders as one wide card instead of four separate ones.
function mergeRow(row: (string | null)[]) {
  const blocks: { code: string | null; start: number; span: number }[] = [];
  for (let i = 0; i < row.length; i++) {
    const code = row[i];
    const last = blocks[blocks.length - 1];
    if (last && last.code === code) {
      last.span += 1;
    } else {
      blocks.push({ code, start: i, span: 1 });
    }
  }
  return blocks;
}

export default function TimetableGrid({
  selectedCode,
  onSelectCode,
}: {
  selectedCode: string | null;
  onSelectCode: (code: string | null) => void;
}) {
  const [activeDay, setActiveDay] = useState<DayName>(DAYS[0]);

  const mergedGrid = useMemo(() => {
    const out: Record<DayName, ReturnType<typeof mergeRow>> = {} as never;
    for (const day of DAYS) out[day] = mergeRow(GRID[day]);
    return out;
  }, []);

  return (
    <div className="space-y-4">
      {/* ---------- Desktop / tablet: full grid ---------- */}
      <div className="hidden overflow-x-auto rounded-2xl border border-black/5 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 lg:block">
        <table className="w-full min-w-[1000px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 w-28 border-b border-black/5 bg-white/90 p-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 backdrop-blur dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-400">
                Day
              </th>
              {PERIODS.map((p) => (
                <th
                  key={p.index}
                  className="border-b border-black/5 p-2 text-center text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400"
                >
                  <div>P{p.index}</div>
                  <div className="mt-0.5 font-normal text-[10px] text-slate-400 dark:text-slate-500">
                    {formatTime(p.from)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DAYS.map((day) => (
              <tr key={day} className="group">
                <td className="sticky left-0 z-10 border-b border-black/5 bg-white/90 p-3 text-sm font-semibold text-slate-700 backdrop-blur dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200">
                  {day}
                </td>
                {mergedGrid[day].map((block) => {
                  if (!block.code) {
                    return (
                      <td
                        key={block.start}
                        colSpan={block.span}
                        className="border-b border-black/5 p-1 dark:border-white/10"
                      >
                        <div className="h-14 rounded-lg border border-dashed border-black/5 dark:border-white/5" />
                      </td>
                    );
                  }
                  const course = COURSES[block.code];
                  const theme = themeFor(block.code);
                  const isSelected = selectedCode === block.code;
                  return (
                    <td
                      key={block.start}
                      colSpan={block.span}
                      className="border-b border-black/5 p-1 dark:border-white/10"
                    >
                      <button
                        onClick={() => onSelectCode(isSelected ? null : block.code)}
                        className={`h-14 w-full rounded-lg border px-2 py-1 text-left transition hover:-translate-y-0.5 hover:shadow-md ${theme.bg} ${theme.border} ${theme.text} ${
                          isSelected ? `ring-2 ${theme.ring} ring-offset-1` : ""
                        }`}
                        title={course?.name}
                      >
                        <div className="truncate text-[11px] font-bold">{block.code}</div>
                        <div className="truncate text-[10px] opacity-80">
                          {course?.name.split(",")[0]}
                        </div>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- Mobile: day-by-day agenda ---------- */}
      <div className="lg:hidden">
        <div className="mb-3 flex gap-1.5 overflow-x-auto rounded-full border border-black/5 bg-white/70 p-1.5 backdrop-blur dark:border-white/10 dark:bg-white/5">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                activeDay === day
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-500 hover:bg-black/5 dark:text-slate-400 dark:hover:bg-white/10"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {mergedGrid[activeDay].filter((b) => b.code).length === 0 && (
            <div className="rounded-2xl border border-dashed border-black/10 p-8 text-center text-sm text-slate-400 dark:border-white/10">
              No classes 🎉
            </div>
          )}
          {mergedGrid[activeDay].map((block) => {
            if (!block.code) return null;
            const course = COURSES[block.code];
            const theme = themeFor(block.code);
            const startPeriod = PERIODS[block.start];
            const endPeriod = PERIODS[block.start + block.span - 1];
            const isSelected = selectedCode === block.code;
            return (
              <button
                key={block.start}
                onClick={() => onSelectCode(isSelected ? null : block.code)}
                className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${theme.bg} ${theme.border} ${
                  isSelected ? `ring-2 ${theme.ring} ring-offset-1` : ""
                }`}
              >
                <div className="flex w-16 shrink-0 flex-col items-center rounded-xl bg-white/70 py-2 text-center text-[10px] font-semibold leading-tight text-slate-600 dark:bg-black/20 dark:text-slate-300">
                  <span>{formatTime(startPeriod.from)}</span>
                  <span className="text-slate-400">–</span>
                  <span>{formatTime(endPeriod.to)}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`truncate text-sm font-bold ${theme.text}`}>{block.code}</div>
                  <div className={`truncate text-xs ${theme.text} opacity-80`}>
                    {course?.name}
                  </div>
                </div>
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${theme.dot}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
