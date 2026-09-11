interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`reveal ${center ? '' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-600 mb-4">
            <span className="h-px w-8 bg-accent-600/40" />
            {eyebrow}
            {center && <span className="h-px w-8 bg-accent-600/40" />}
          </span>
        </div>
      )}
      <h2 className="reveal stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-light-text">
        {title}
      </h2>
      {subtitle && (
        <p className="reveal stagger-2 mt-5 text-base sm:text-lg text-light-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
