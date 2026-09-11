import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section bg-light-surface">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say."
          subtitle="Real feedback from businesses we've helped build and grow their digital presence."
        />

        <div className="mt-16 overflow-hidden -mx-5 sm:-mx-8 lg:-mx-16 xl:-mx-24">
          <div className="testimonial-track flex w-max gap-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <article key={`${t.id}-${i}`} className="group glass-card glass-hover rounded-2xl p-8 flex flex-col w-[min(85vw,380px)] shrink-0">
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-5">
                <Quote size={32} className="text-accent-500/20" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-light-muted leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-light-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-light-border"
                />
                <div>
                  <p className="text-sm font-semibold text-light-text">{t.name}</p>
                  <p className="text-xs text-light-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
