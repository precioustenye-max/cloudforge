import { ArrowRight, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="container-max section-padding">
        <ScrollReveal className="relative overflow-hidden rounded-3xl glass-card border-accent-500/15 p-12 md:p-20 text-center">
          {/* Background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-300/8 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-light-text">
              Have an idea?
              <br />
              <span className="text-gradient-accent">Let&rsquo;s forge it.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-light-muted leading-relaxed max-w-2xl mx-auto">
              Tell us what you&rsquo;re building, what you&rsquo;re trying to improve,
              or where you&rsquo;re stuck. We&rsquo;ll help you find the right digital
              solution.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" size="lg">
                Start a Project
                <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                <Mail size={18} />
                Contact Cloudforge
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
