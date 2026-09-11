import { ArrowRight, FolderOpen } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[760px] flex items-center justify-center overflow-hidden pt-24 text-center">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M0 0h60v60H0V0zm10 10h40v40H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[420px] bg-accent-400/10 rounded-full blur-[130px] animate-pulse-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-light-bg to-transparent" />

      <div className="container-max section-padding relative z-10 w-full flex justify-center">
        <div className="max-w-5xl flex flex-col items-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-xs font-mono text-light-muted tracking-wide">
              Web &bull; Software &bull; Automation &bull; Digital Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-light-text animate-fade-up">
            Forging Digital
            <br />
            Solutions.
            <br />
            <span className="text-gradient-accent">Building What&rsquo;s Next.</span>
          </h1>

          {/* Supporting text */}
          <p className="mt-8 text-lg sm:text-xl text-light-muted leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Cloudforge helps businesses transform ideas into modern websites,
            software and digital experiences built for growth.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button to="/contact" size="lg">
              Start a Project
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button to="/projects" variant="secondary" size="lg">
              <FolderOpen size={18} />
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-light-border flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-accent-500 animate-float" />
        </div>
      </div>
    </section>
  );
}
