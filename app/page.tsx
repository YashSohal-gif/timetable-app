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
    <div className="min-h-screen pb-28">
      <div className="mesh-backdrop" />
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 sm:py-12">
        <Header />

        <StatsBar />

        <section>
          <SectionTitle title="Weekly Grid" subtitle="Your full week at a glance" />
          <TimetableGrid selectedCode={selectedCode} onSelectCode={setSelectedCode} />
        </section>

        <section>
          <SectionTitle title="Course Details" subtitle="Faculty, credits, slots & rooms" />
          <CourseList selectedCode={selectedCode} onSelectCode={setSelectedCode} />
        </section>

        <footer className="pt-6 text-center text-[11px] font-medium tracking-wide text-slate-400 dark:text-slate-500">
          <p>Built with Next.js · Data transcribed from the official Batch 1 timetable</p>
          <p className="mt-1">Made by Yash Sohal</p>
        </footer>
      </main>

      <DetailPanel code={selectedCode} onClose={() => setSelectedCode(null)} />
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-0.5 text-[13px] text-slate-500 dark:text-slate-400">{subtitle}</p>
    </div>
  );
}
