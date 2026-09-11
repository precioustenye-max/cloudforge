import { ExternalLink } from 'lucide-react';
import { partners } from '@/data/partners';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function Partners() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Partners & Collaborators"
          title="Built together."
          subtitle="Great technology is rarely built alone. Cloudforge works with developers, designers, creatives, businesses and technology partners to bring projects to life."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <ScrollReveal
              key={partner.id}
              stagger={(i % 4) + 1}
              as="article"
              className="group glass-card glass-hover rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent-500/20">
                <span className="font-display font-bold text-xl text-accent-600">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-base font-semibold text-light-text mb-1">
                {partner.name}
              </h3>
              <p className="text-sm text-light-muted mb-4">{partner.role}</p>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 hover:text-accent-700 transition-colors"
              >
                Visit Site
                <ExternalLink size={12} />
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/partners" variant="outline" size="md">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
