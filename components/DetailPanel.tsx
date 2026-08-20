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

        {((course.whatsappGroups && course.whatsappGroups.length > 0) || course.classroomUrl) && (
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {course.whatsappGroups?.map((g) => (
              <a
                key={g.url}
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:brightness-105 active:scale-[0.98] sm:w-auto sm:flex-1"
              >
                <WhatsAppIcon />
                {course.whatsappGroups!.length > 1 ? g.label : "Join Class WhatsApp Group"}
              </a>
            ))}
            {course.classroomUrl && (
              <a
                href={course.classroomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A73E8] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:brightness-105 active:scale-[0.98] sm:w-auto sm:flex-1"
              >
                <ClassroomIcon />
                Open Google Classroom
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.22 8.22 0 1 1 6.96 3.84Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.19 3.7.58.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

function ClassroomIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 3 2 8l10 5 8-4.2V16h1.8V8L12 3Zm-6.2 8.3V15c0 1.9 3.1 4 6.2 4s6.2-2.1 6.2-4v-3.7L12 15.2l-6.2-3.9Z" />
    </svg>
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
