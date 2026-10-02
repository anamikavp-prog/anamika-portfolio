import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, badge, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-slate-200/70 py-16 transition-colors dark:border-white/10 md:py-24 ${className}`}
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[12rem_1fr] md:gap-12">
        <div className="md:sticky md:top-24 md:self-start">
          {badge && (
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              {badge}
            </span>
          )}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
          <div className="mt-2.5 hidden h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 md:block" />
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
