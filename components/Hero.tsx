import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="hero-in max-w-3xl">
        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 font-medium text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <svg className="h-3.5 w-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 font-heading text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400">{profile.name}</span>
        </h1>

        <p className="mt-4 font-heading text-xl font-semibold text-indigo-600 dark:text-indigo-400 sm:text-2xl md:text-3xl">
          {profile.title}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {profile.positioning}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95 hover:shadow-indigo-500/35 active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact me
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/60 px-5 py-3 font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-indigo-500 hover:text-indigo-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-white"
          >
            <span>View Experience</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/60 px-5 py-3 font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-indigo-500 hover:text-indigo-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-white"
          >
            <span>Projects</span>
          </a>
        </div>
      </div>

      {/* Current Position & Availability Card */}
      <div className="hero-in-late mt-14 max-w-2xl rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-indigo-400/30">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Active Role
          </div>
          <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
            React • Supabase • QA
          </span>
        </div>

        <p className="mt-3 font-heading text-lg font-bold text-slate-900 dark:text-white">
          {profile.current.role}{" "}
          <span className="font-normal text-slate-500 dark:text-slate-400">at</span>{" "}
          <span className="text-indigo-600 dark:text-indigo-400">{profile.current.company}</span>
        </p>

        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.current.summary}
        </p>

        <div className="mt-4 border-t border-slate-200/70 pt-3 dark:border-white/10">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Open to entry-level roles:
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {profile.openTo.map((role) => (
              <span
                key={role}
                className="rounded-md border border-slate-200/60 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-white"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
