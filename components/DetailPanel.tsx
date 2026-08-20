"use client";

import { COURSES } from "@/lib/timetable-data";
import { themeFor } from "@/lib/colors";

export default function DetailPanel({
  code,
  onClose,
}: {
  code: string | null;
  onClose: () => void;
}) {
  if (!code) return null;
  const course = COURSES[code];
  if (!course) return null;
  const theme = themeFor(code);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center px-3 pb-3 sm:px-6 sm:pb-6">
      <div
        className={`w-full max-w-xl rounded-2xl border ${theme.border} ${theme.bg} p-4 shadow-2xl backdrop-blur-md sm:p-5`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className={`rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${theme.text} dark:bg-black/20`}>
              {course.code}
            </span>
            <h3 className={`mt-1.5 text-base font-bold leading-snug ${theme.text}`}>
              {course.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full bg-white/70 px-2.5 py-1 text-sm font-bold text-slate-500 hover:bg-white dark:bg-black/20 dark:text-slate-300"
          >
            ✕
          </button>
        </div>

        <div className={`mt-3 grid grid-cols-2 gap-2 text-xs ${theme.text} sm:grid-cols-4`}>
          <Fact label="Credits" value={String(course.credit)} />
          <Fact label="Slot" value={course.slots.join(", ")} />
          <Fact label="Faculty ID" value={course.facultyId} />
          <Fact label="Faculty" value={course.faculty} />
        </div>

        {!course.online && (
          <div className={`mt-2 rounded-xl bg-white/60 p-3 text-xs ${theme.text} dark:bg-black/20`}>
            📍 {course.room}, {course.building} ({course.floor}) — {course.location}
          </div>
        )}
        {course.online && (
          <div className={`mt-2 rounded-xl bg-white/60 p-3 text-xs ${theme.text} dark:bg-black/20`}>
            💻 Delivered online — no physical classroom
          </div>
        )}
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/60 px-2 py-1.5 dark:bg-black/20">
      <div className="text-[10px] uppercase tracking-wide opacity-70">{label}</div>
      <div className="truncate text-xs font-semibold">{value}</div>
    </div>
  );
}
