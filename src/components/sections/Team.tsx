import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '@/data/team';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Team() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section bg-light-surface">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind Cloudforge."
          subtitle="A team of developers, designers and problem-solvers dedicated to building digital solutions that work."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <ScrollReveal
              key={member.id}
              stagger={(i % 4) + 1}
              as="article"
              className="group glass-card glass-hover rounded-2xl overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-surface/90 via-transparent to-transparent" />

                {/* Socials */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-light-text hover:text-accent-600 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-light-text hover:text-accent-600 transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-light-text hover:text-accent-600 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-base font-semibold text-light-text mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-light-muted leading-relaxed">
                  {member.bio}
                </p>
                {member.portfolioUrl ? (
                  <a
                    href={member.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    View Portfolio
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    to={`/team/${member.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    View Portfolio
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
