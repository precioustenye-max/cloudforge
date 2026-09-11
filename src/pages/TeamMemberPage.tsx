import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '@/data/team';
import SEO from '@/components/ui/SEO';

export default function TeamMemberPage() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find((teamMember) => teamMember.id === id);

  if (!member) return <Navigate to="/about" replace />;

  return (
    <>
      <SEO title={`${member.name} — Cloudforge`} description={`${member.name}'s profile and portfolio at Cloudforge.`} />
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container-max section-padding">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm text-light-muted hover:text-light-text transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Team
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-center">
            <img src={member.image} alt={member.name} className="w-56 h-56 rounded-2xl object-cover glass-card" />
            <div>
              <p className="text-sm font-medium text-accent-600 mb-3">{member.role}</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-light-text">{member.name}</h1>
              <p className="mt-5 max-w-2xl text-lg text-light-muted leading-relaxed">{member.bio}</p>
              <div className="mt-6 flex gap-3">
                {member.socials.linkedin && <a href={member.socials.linkedin} aria-label="LinkedIn" className="text-light-muted hover:text-accent-600"><Linkedin size={18} /></a>}
                {member.socials.twitter && <a href={member.socials.twitter} aria-label="Twitter" className="text-light-muted hover:text-accent-600"><Twitter size={18} /></a>}
                {member.socials.github && <a href={member.socials.github} aria-label="GitHub" className="text-light-muted hover:text-accent-600"><Github size={18} /></a>}
              </div>
              {member.portfolioUrl && (
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-700 transition-colors"
                >
                  Visit Personal Portfolio
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
