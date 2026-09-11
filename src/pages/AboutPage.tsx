import { Target, Eye, Heart } from 'lucide-react';
import { whyCloudforge } from '@/data/whyCloudforge';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Team from '@/components/sections/Team';
import CTASection from '@/components/sections/CTASection';

const values = [
  { name: 'Innovation', description: 'We embrace new ideas and technologies to solve problems creatively.' },
  { name: 'Integrity', description: 'We build trust through honesty, transparency and doing what we say.' },
  { name: 'Quality', description: 'We hold ourselves to high standards in everything we build.' },
  { name: 'Growth', description: 'We help businesses grow and grow alongside them.' },
  { name: 'Collaboration', description: 'We work as a team with our clients and partners.' },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About — Cloudforge"
        description="Cloudforge is a technology company focused on building digital products and solutions that help businesses operate, connect and grow."
      />

      <PageHeader
        eyebrow="About Cloudforge"
        title="Technology should create possibilities."
        subtitle="Cloudforge is a technology company focused on building digital products and solutions that help businesses operate, connect and grow in a digital world."
      />

      <section className="pb-16 pt-4">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-lg text-light-muted leading-relaxed">
                From websites and e-commerce platforms to custom software and
                automation, we combine technology, design and business thinking to
                turn ideas into useful digital experiences.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-section">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal className="glass-card rounded-2xl p-10">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                <Target size={24} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-light-text mb-3">Mission</h3>
              <p className="text-light-muted leading-relaxed">
                To make powerful digital technology accessible to businesses of
                every size.
              </p>
            </ScrollReveal>
            <ScrollReveal stagger={2} className="glass-card rounded-2xl p-10">
              <div className="w-12 h-12 rounded-xl bg-accent-400/10 border border-accent-400/20 flex items-center justify-center mb-6">
                <Eye size={24} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-light-text mb-3">Vision</h3>
              <p className="text-light-muted leading-relaxed">
                To become a trusted technology partner for ambitious businesses
                worldwide.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-section">
        <div className="container-max section-padding">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for."
            subtitle="The principles that guide every project and partnership."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal
                key={value.name}
                stagger={(i % 3) + 1}
                as="article"
                className="glass-card glass-hover rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={18} className="text-accent-600" />
                  <h3 className="text-base font-semibold text-light-text">
                    {value.name}
                  </h3>
                </div>
                <p className="text-sm text-light-muted leading-relaxed">
                  {value.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-section">
        <div className="container-max section-padding">
          <SectionHeading
            eyebrow="Why Cloudforge"
            title="A partner you can rely on."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCloudforge.map((point, i) => {
              const Icon = point.icon;
              return (
                <ScrollReveal
                  key={point.title}
                  stagger={(i % 3) + 1}
                  as="article"
                  className="group glass-card glass-hover rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent-500/20">
                      <Icon size={20} className="text-accent-600" />
                    </div>
                    <h3 className="text-base font-semibold text-light-text">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-light-muted leading-relaxed">
                    {point.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Team />

      <CTASection />
    </>
  );
}
