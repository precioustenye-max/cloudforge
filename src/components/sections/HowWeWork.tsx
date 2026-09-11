import { processSteps } from '@/data/process';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HowWeWork() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process from idea to launch."
          subtitle="Every project follows a structured approach designed to deliver results, not just deliverables."
        />

        <div className="mt-16 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={step.number}
                  stagger={(i % 3) + 1}
                  as="article"
                  className="group glass-card glass-hover rounded-2xl p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent-500/20">
                      <Icon size={24} className="text-accent-600" />
                    </div>
                    <span className="font-mono text-3xl font-bold text-black/[0.06] group-hover:text-accent-500/20 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-light-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-light-muted leading-relaxed">
                    {step.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
