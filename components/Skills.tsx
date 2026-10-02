import Section from "./Section";
import { skills } from "@/data/portfolio";

const groupIcons: Record<string, JSX.Element> = {
  Languages: (
    <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "Web and mobile": (
    <svg className="h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  "Backend and APIs": (
    <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Databases: (
    <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  "AI and data": (
    <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "Quality and tools": (
    <svg className="h-4 w-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" badge="Capabilities">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.group}
            className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-indigo-400/40"
          >
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-white/5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5">
                  {groupIcons[g.group] || (
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  )}
                </span>
                <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                  {g.group}
                </h3>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-3xs font-semibold text-slate-500 dark:bg-white/5 dark:text-slate-400">
                {g.items.length}
              </span>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-slate-200/60 bg-white/60 px-2.5 py-1 text-xs font-medium text-slate-700 transition-all hover:border-indigo-400 hover:bg-indigo-50/50 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
