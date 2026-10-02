import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" badge="Career Journey">
      <div className="relative border-l-2 border-slate-200 pl-6 dark:border-slate-800 sm:pl-8">
        <div className="space-y-10">
          {experience.map((e, i) => {
            const isCurrent = i === 0;
            return (
              <div key={e.role + e.company} className="relative group">
                {/* Node icon / pulse indicator */}
                <div className="absolute -left-[31px] top-1 sm:-left-[39px]">
                  {isCurrent ? (
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-md shadow-emerald-500/50 dark:border-night" />
                    </span>
                  ) : (
                    <span className="flex h-5 w-5 items-center justify-center">
                      <span className="h-3 w-3 rounded-full border-2 border-white bg-slate-300 transition-colors group-hover:bg-indigo-500 dark:border-night dark:bg-slate-700 dark:group-hover:bg-indigo-400" />
                    </span>
                  )}
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-indigo-400/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        isCurrent
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-400"
                      }`}
                    >
                      {e.period}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {e.company}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-heading text-xl font-bold text-slate-900 dark:text-white">
                    {e.role}
                  </h3>

                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                          <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                          </svg>
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
