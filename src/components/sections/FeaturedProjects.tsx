import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section bg-light-surface">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Built with purpose."
          subtitle="A look at some of the digital products and experiences we\u2019ve created."
        />

        {/* Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
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

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 3).map((project, i) => (
            <ScrollReveal
              key={project.slug}
              stagger={(i % 3) + 1}
              as="article"
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-accent-600/5 transition-all duration-300 hover:-translate-y-1"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
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

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-light-text mb-2 group-hover:text-accent-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-light-muted leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
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

        <div className="mt-12 text-center">
          <Button to="/projects" variant="secondary" size="lg">
            View All Projects
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
