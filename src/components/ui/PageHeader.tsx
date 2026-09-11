import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative border-b border-light-border bg-white/60 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent-500/[0.06] to-transparent pointer-events-none" />
      <div className="container-max section-padding relative z-10 text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-accent-600/20 bg-accent-600/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-light-text animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-light-muted leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
