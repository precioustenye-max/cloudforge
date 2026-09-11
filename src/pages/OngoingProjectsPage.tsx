import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ongoingProjects } from '@/data/projects';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';

export default function OngoingProjectsPage() {
  return (
    <>
      <SEO title="Ongoing Projects — Cloudforge" description="Projects currently in development at Cloudforge." />
      <PageHeader eyebrow="Ongoing Projects" title="Currently in progress." subtitle="Follow the products we are actively designing and building." />
      <section className="pb-24 pt-8">
        <div className="container-max section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="group glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-light-text group-hover:text-accent-600">{project.name}</h2>
                <span className="px-2.5 py-1 text-xs rounded-full bg-accent-500/10 text-accent-600">{project.progress}%</span>
              </div>
              <p className="mt-4 text-sm text-light-muted leading-relaxed">{project.description}</p>
              <p className="mt-6 text-xs font-medium text-accent-600">{project.status}</p>
              <div className="mt-3 h-2 rounded-full bg-black/[0.06] overflow-hidden"><div className="h-full rounded-full bg-accent-600" style={{ width: `${project.progress}%` }} /></div>
              <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="px-2.5 py-1 text-xs rounded-md bg-black/[0.04] text-light-muted border border-light-border">{technology}</span>)}</div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">View Project Details <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
