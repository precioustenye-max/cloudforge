import { Target, Eye, Heart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const values = ['Innovation', 'Integrity', 'Quality', 'Growth', 'Collaboration'];

export default function AboutPreview() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              eyebrow="About Cloudforge"
              title="Technology should create possibilities."
              center={false}
            />
            <div className="mt-6 space-y-4 text-light-muted leading-relaxed">
              <ScrollReveal>
                <p>
                  Cloudforge is a technology company focused on building digital
                  products and solutions that help businesses operate, connect and
                  grow in a digital world.
                </p>
              </ScrollReveal>
              <ScrollReveal stagger={1}>
                <p>
                  From websites and e-commerce platforms to custom software and
                  automation, we combine technology, design and business thinking to
                  turn ideas into useful digital experiences.
                </p>
              </ScrollReveal>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 space-y-4">
              <ScrollReveal stagger={2} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                    <Target size={18} className="text-accent-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-light-text uppercase tracking-wider mb-1">
                      Mission
                    </h4>
                    <p className="text-sm text-light-muted leading-relaxed">
                      To make powerful digital technology accessible to businesses of
                      every size.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={3} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center shrink-0">
                    <Eye size={18} className="text-accent-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-light-text uppercase tracking-wider mb-1">
                      Vision
                    </h4>
                    <p className="text-sm text-light-muted leading-relaxed">
                      To become a trusted technology partner for ambitious businesses
                      worldwide.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-8">
              <Button to="/about" variant="secondary" size="md">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right: Values */}
          <div>
            <ScrollReveal stagger={2} className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart size={20} className="text-accent-600" />
                <h3 className="text-lg font-semibold text-light-text">Our Values</h3>
              </div>
              <div className="space-y-4">
                {values.map((value, i) => (
                  <ScrollReveal
                    key={value}
                    stagger={i + 1}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <span className="font-mono text-sm text-accent-600/60 w-6">
                      0{i + 1}
                    </span>
                    <span className="text-base text-light-muted group-hover:text-light-text transition-colors">
                      {value}
                    </span>
                    <div className="flex-1 h-px bg-light-border group-hover:bg-accent-500/20 transition-colors" />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
