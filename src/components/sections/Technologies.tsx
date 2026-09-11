import { technologies } from '@/data/technologies';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Technologies() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section bg-light-surface">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Technologies"
          title="Built with modern technology."
          subtitle="We use proven, current tools and frameworks to build solutions that are fast, reliable and scalable."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <ScrollReveal
              key={tech.name}
              stagger={(i % 4) + 1}
              className="group"
            >
              <div className="glass glass-hover rounded-xl px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5">
                <span className="w-2 h-2 rounded-full bg-accent-500 group-hover:bg-accent-400 transition-colors" />
                <span className="text-sm font-medium text-light-muted group-hover:text-light-text transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs font-mono text-light-subtle group-hover:text-accent-600/60 transition-colors">
                  {tech.category}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
