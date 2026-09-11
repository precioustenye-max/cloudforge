import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { projects } from '@/data/projects';
import SEO from '@/components/ui/SEO';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';



export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const sections = [
    { label: 'Challenge', content: project.caseStudy.challenge },
    { label: 'Solution', content: project.caseStudy.solution },
    { label: 'Process', content: project.caseStudy.process },
  ];

  return (
    <>
      <SEO
        title={`${project.name} — Case Study | Cloudforge`}
        description={project.shortDescription}
      />

      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent-400/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="container-max section-padding relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-light-muted hover:text-light-text transition-colors mb-6 animate-fade-up"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 text-xs font-mono rounded-full glass text-accent-600 mb-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-light-text animate-fade-up" style={{ animationDelay: '0.15s' }}>
              {project.name}
            </h1>
            <p className="mt-5 text-lg text-light-muted leading-relaxed animate-fade-up" style={{ animationDelay: '0.25s' }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-4">
        <div className="container-max section-padding">
          <ScrollReveal className="relative rounded-2xl overflow-hidden glass-card">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-light-surface/40 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 pt-8">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {sections.map((section, i) => (
                <ScrollReveal key={section.label} stagger={i + 1}>
                  <h2 className="text-2xl font-bold text-light-text mb-4">
                    {section.label}
                  </h2>
                  <p className="text-light-muted leading-relaxed">
                    {section.content}
                  </p>
                </ScrollReveal>
              ))}

              <ScrollReveal stagger={4}>
                <h2 className="text-2xl font-bold text-light-text mb-6">Results</h2>
                <ul className="space-y-4">
                  {project.caseStudy.results.map((result) => (
                    <li key={result} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-accent-600" />
                      </div>
                      <span className="text-light-text">{result}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal stagger={5}>
                <h2 className="text-2xl font-bold text-light-text mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.caseStudy.screenshots.map((screenshot, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden glass-card">
                      <img
                        src={screenshot}
                        alt={`${project.name} screenshot ${i + 1}`}
                        loading="lazy"
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal stagger={2} className="glass-card rounded-2xl p-8 sticky top-28">
                <h3 className="text-sm font-semibold text-light-text uppercase tracking-wider mb-6">
                  Project Details
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs text-light-subtle uppercase tracking-wide mb-1">
                      Category
                    </p>
                    <p className="text-sm text-light-text">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-light-subtle uppercase tracking-wide mb-1">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-black/[0.04] text-light-muted border border-light-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-light-border">
                  <Button to="/contact" fullWidth size="md">
                    Start a Similar Project
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
