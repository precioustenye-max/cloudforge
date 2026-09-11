import { ExternalLink, Handshake } from 'lucide-react';
import { partners } from '@/data/partners';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

export default function PartnersPage() {
  return (
    <>
      <SEO
        title="Partners & Collaborators — Cloudforge"
        description="Great technology is rarely built alone. Cloudforge works with developers, designers, creatives and technology partners."
      />

      <PageHeader
        eyebrow="Partners & Collaborators"
        title="Built together."
        subtitle="Great technology is rarely built alone. Cloudforge works with developers, designers, creatives, businesses and technology partners to bring projects to life."
      />

      <section className="pb-16 pt-4">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-max section-padding">
          <ScrollReveal className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
              <Handshake size={28} className="text-accent-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-light-text mb-4">
              Want to partner with Cloudforge?
            </h2>
            <p className="text-light-muted leading-relaxed mb-8">
              We&rsquo;re always looking to collaborate with talented developers,
              designers and technology partners. Let&rsquo;s build something great
              together.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
