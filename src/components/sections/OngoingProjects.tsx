import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OngoingProjects() {
  return (
    <section className="border-section bg-light-surface py-16">
      <div className="container-max section-padding">
        <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-accent-600 mb-3">Currently in progress</p>
            <h2 className="text-3xl font-bold text-light-text">See what we are building next.</h2>
            <p className="mt-3 max-w-2xl text-light-muted">Explore our ongoing projects, the technology behind them, and how development is progressing.</p>
          </div>
          <Link to="/ongoing-projects" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-sm font-medium text-white hover:bg-accent-700 transition-colors">
            View Ongoing Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
