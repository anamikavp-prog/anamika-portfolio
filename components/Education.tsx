import Section from "./Section";
import { education, certifications, achievements } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education & Credentials" badge="Background">
      <div className="space-y-8">
        {/* Education History */}
        <div className="space-y-3.5">
          <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate-900 dark:text-white">
            <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Formal Education
          </h3>
          <div className="grid gap-3.5">
            {education.map((e) => (
              <div
                key={e.name}
                className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200/80 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-500/40 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-indigo-400/40 sm:flex-row sm:items-center"
              >
                <div>
                  <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                    {e.name}
                  </h4>
                  <p className="mt-0.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {e.detail}
                  </p>
                </div>
                <span className="shrink-0 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-400 sm:self-auto">
                  {e.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements 2-column grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Certifications */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate-900 dark:text-white">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate-900 dark:text-white">
              <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Achievements & Honors
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
