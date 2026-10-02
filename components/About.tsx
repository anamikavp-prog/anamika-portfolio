import Section from "./Section";
import { profile } from "@/data/portfolio";

const focusAreas = [
  {
    title: "Full Stack Development",
    desc: "Building seamless end-to-end web & mobile apps with React, Flutter, and .NET backed by SQL and cloud databases.",
    icon: (
      <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "QA & Testing Mindset",
    desc: "Ensuring high reliability with automated and manual testing, rigorous edge-case verification, and debugging.",
    icon: (
      <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "AI & Modern APIs",
    desc: "Integrating intelligent features powered by Gemini API, NLP models (T5, BART), and real-time backend services.",
    icon: (
      <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <Section id="about" title="About" badge="Overview">
      <div className="space-y-6">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-500/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-indigo-400/40"
            >
              <div className="mb-3 inline-flex rounded-lg bg-slate-100 p-2.5 dark:bg-white/5">
                {area.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {area.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
