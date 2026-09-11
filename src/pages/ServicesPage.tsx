import { Check, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — Cloudforge"
        description="Web development, e-commerce, custom software, business automation, UI/UX design and digital transformation services."
      />

      <PageHeader
        eyebrow="Our Services"
        title="Technology that moves your business forward."
        subtitle="We provide practical digital solutions designed to solve real business problems — not just build attractive interfaces."
      />

      <section className="pb-16 pt-4">
        <div className="container-max section-padding space-y-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <ScrollReveal
                key={service.id}
                as="article"
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <div className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-accent-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-light-text mb-4">
                    {service.title}
                  </h3>
                  <p className="text-light-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-accent-600" />
                        </div>
                        <span className="text-sm text-light-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button to="/contact" variant="outline" size="md">
                      Start a Project
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
                <div className="lg:[direction:ltr]">
                  <div className="glass-card rounded-2xl p-8 lg:p-12 h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent-400/5 rounded-full blur-[60px]" />
                    <Icon size={80} className="text-accent-500/20" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
