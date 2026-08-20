"use client";

import { useState } from "react";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import TimetableGrid from "@/components/TimetableGrid";
import CourseList from "@/components/CourseList";
import DetailPanel from "@/components/DetailPanel";

export default function Home() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-28 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 sm:py-10">
        <Header />

        <StatsBar />

        <section>
          <SectionTitle icon="📆" title="Weekly Grid" subtitle="Your full week at a glance" />
          <TimetableGrid selectedCode={selectedCode} onSelectCode={setSelectedCode} />
        </section>

        <section>
          <SectionTitle icon="📚" title="Course Details" subtitle="Faculty, credits, slots & rooms" />
          <CourseList selectedCode={selectedCode} onSelectCode={setSelectedCode} />
        </section>

        <footer className="pt-6 text-center text-xs text-slate-400 dark:text-slate-500">
          Built with Next.js + Tailwind · Data transcribed from the official Batch 1 timetable
        </footer>
      </main>

      <DetailPanel code={selectedCode} onClose={() => setSelectedCode(null)} />
    </div>
  );
}

function SectionTitle({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
