import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" badge="Contact">
      <div className="space-y-8">
        <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            Let's build something exceptional together
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            I'm currently seeking entry-level software roles including Software Engineer, Full Stack Developer, .NET Developer, or Flutter Developer. Whether you have an open position, an inquiry, or just want to connect, feel free to reach out!
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* Email Card */}
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/80 p-4 transition-all hover:border-indigo-500 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-400"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Email directly</p>
                <p className="truncate font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {profile.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/80 p-4 transition-all hover:border-emerald-500 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Phone</p>
                <p className="truncate font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {profile.phone}
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/80 p-4 transition-all hover:border-blue-500 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.85 18.5V10.13H5.07v8.37h2.78z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Professional Network</p>
                <p className="truncate font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  LinkedIn Profile
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/80 p-4 transition-all hover:border-slate-800 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white dark:bg-white/10 dark:text-slate-200 dark:group-hover:bg-white dark:group-hover:text-slate-900">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Code & Projects</p>
                  <p className="truncate font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    anamikavp-prog
                  </p>
                </div>
              </a>
            )}

            {/* Location Card */}
            <div className="flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Location</p>
                <p className="truncate font-semibold text-slate-900 dark:text-white">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a
            href="#top"
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <span>Back to top</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </footer>
      </div>
    </Section>
  );
}
