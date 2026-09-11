import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CTASection from '@/components/sections/CTASection';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Projects — Cloudforge"
        description="Explore digital products and experiences built by Cloudforge, including e-commerce platforms, AI tools and SaaS applications."
      />

      <PageHeader
        eyebrow="Our Work"
        title="Built with purpose."
        subtitle="A look at some of the digital products and experiences we\u2019ve created."
      />

      <div className="container-max section-padding pt-4">
        <div className="flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent-600 text-white'
                  : 'glass text-light-muted hover:text-light-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="pb-16 pt-8">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal
                key={project.slug}
                stagger={(i % 3) + 1}
                as="article"
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-accent-600/5 transition-all duration-300 hover:-translate-y-1"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-light-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 text-xs font-mono rounded-full glass text-accent-600">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-light-text mb-2 group-hover:text-accent-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-light-muted leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-black/[0.04] text-light-muted border border-light-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 group-hover:text-accent-700 transition-colors">
                      View Case Study
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
