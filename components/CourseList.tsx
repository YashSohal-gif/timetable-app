"use client";

import { COURSES } from "@/lib/timetable-data";
import { themeFor } from "@/lib/colors";

export default function CourseList({
  selectedCode,
  onSelectCode,
}: {
  selectedCode: string | null;
  onSelectCode: (code: string | null) => void;
}) {
  const courses = Object.values(COURSES);

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {courses.map((course) => {
        const theme = themeFor(course.code);
        const isSelected = selectedCode === course.code;
        return (
          <button
            key={course.code}
            onClick={() => onSelectCode(isSelected ? null : course.code)}
            id={`course-${course.code}`}
            className={`flex flex-col gap-2 rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${theme.bg} ${theme.border} ${
              isSelected ? `ring-2 ${theme.ring} ring-offset-2 dark:ring-offset-slate-950` : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${theme.text} bg-white/60 dark:bg-black/20`}>
                {course.code}
              </span>
              <span className={`flex items-center gap-1 text-xs font-semibold ${theme.text}`}>
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                {course.credit} cr
              </span>
            </div>

            <h3 className={`text-sm font-bold leading-snug ${theme.text}`}>{course.name}</h3>

            <div className="mt-1 space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <span>👤</span>
                <span className="truncate">{course.faculty}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>🏷️</span>
                <span>Slot {course.slots.join(", ")}</span>
              </div>
              {course.online ? (
                <div className="flex items-center gap-1.5">
                  <span>💻</span>
                  <span>Online</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  <span className="truncate">
                    {course.room} · {course.building}
                  </span>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
