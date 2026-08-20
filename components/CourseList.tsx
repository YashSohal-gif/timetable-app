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
            className={`glass-panel flex flex-col gap-2.5 rounded-[22px] p-4.5 text-left transition duration-300 ease-out hover:-translate-y-1 ${
              isSelected ? `ring-2 ${theme.ring} ring-offset-2 dark:ring-offset-black` : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${theme.text} ${theme.bg} border ${theme.border}`}>
                {course.code}
              </span>
              <span className={`flex items-center gap-1.5 text-xs font-semibold ${theme.text}`}>
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                {course.credit} cr
              </span>
            </div>

            <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">{course.name}</h3>

            <div className="mt-1 space-y-1.5 text-[13px] text-slate-500 dark:text-slate-400">
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
