import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found | Cloudforge" />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-accent-400/8 rounded-full blur-[120px]" />
        <div className="container-max section-padding relative z-10 text-center">
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-display font-bold text-gradient-accent leading-none">
            404
          </h1>
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-light-text">
            Page not found
          </h2>
          <p className="mt-4 text-light-muted max-w-md mx-auto leading-relaxed">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/" size="lg">
              <Home size={18} />
              Back to Home
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              <ArrowLeft size={18} />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
