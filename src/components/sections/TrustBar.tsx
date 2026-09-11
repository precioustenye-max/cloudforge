import { company } from '@/data/site';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TrustBar() {
  return (
    <section className="relative py-16 md:py-20 border-y border-light-border bg-light-surface">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {company.stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              stagger={i + 1}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-accent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-light-muted font-medium tracking-wide">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
