import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 lg:py-32 border-section">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          subtitle="Everything you need to know before starting a project with Cloudforge."
        />

        <div className="mt-16 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} stagger={(i % 4) + 1}>
              <div
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'border-accent-500/30' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-medium text-light-text">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-accent-600 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === i
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-light-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
