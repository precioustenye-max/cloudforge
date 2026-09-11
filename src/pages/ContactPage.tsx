import { useState, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { insertProjectInquiry } from '@/lib/supabase';
import { company } from '@/data/site';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/ui/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

const serviceOptions = [
  'Website',
  'E-commerce',
  'Custom Software',
  'Automation',
  'UI/UX Design',
  'Digital Transformation',
  'Other',
];

const budgetOptions = [
  'Under $500',
  '$500\u2013$1,000',
  '$1,000\u2013$2,500',
  '$2,500\u2013$5,000',
  '$5,000+',
];

const timelineOptions = [
  'ASAP',
  '1\u20132 weeks',
  '1\u20132 months',
  '3+ months',
  'Flexible',
];

interface FormData {
  full_name: string;
  business: string;
  email: string;
  phone: string;
  service_needed: string;
  estimated_budget: string;
  preferred_timeline: string;
  project_description: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    business: '',
    email: '',
    phone: '',
    service_needed: '',
    estimated_budget: '',
    preferred_timeline: '',
    project_description: '',
  });

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.full_name.trim()) e.full_name = 'Please enter your name';
    if (!formData.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email';
    if (!formData.service_needed) e.service_needed = 'Please select a service';
    if (!formData.project_description.trim())
      e.project_description = 'Please describe your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const { error } = await insertProjectInquiry(formData);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({
        full_name: '',
        business: '',
        email: '',
        phone: '',
        service_needed: '',
        estimated_budget: '',
        preferred_timeline: '',
        project_description: '',
      });
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-black/[0.03] border text-sm text-light-text placeholder:text-light-subtle transition-colors duration-200 outline-none';
  const inputOk = 'border-light-border focus:border-accent-500/50 focus:bg-black/[0.04]';
  const inputErr = 'border-red-500/40 focus:border-red-500/60';

  return (
    <>
      <SEO
        title="Contact — Cloudforge"
        description="Start a project with Cloudforge. Tell us what you're building and we'll help you find the right digital solution."
      />

      <PageHeader
        eyebrow="Contact"
        title="Start a Project"
        subtitle="Tell us what you're building, what you're trying to improve, or where you're stuck. We'll help you find the right digital solution."
      />

      <section className="pb-16 pt-4">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal className="glass-card rounded-2xl p-8 md:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-accent-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-light-text mb-3">
                      Project request sent!
                    </h3>
                    <p className="text-light-muted max-w-md leading-relaxed">
                      Thank you for reaching out. We'll review your request and get
                      back to you within 24\u201348 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-2">
                        <AlertCircle size={18} className="text-red-500 shrink-0" />
                        <p className="text-sm text-red-600">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-light-text mb-2">
                          Full Name <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.full_name}
                          onChange={(e) => handleChange('full_name', e.target.value)}
                          className={`${inputBase} ${errors.full_name ? inputErr : inputOk}`}
                          placeholder="John Doe"
                        />
                        {errors.full_name && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.full_name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-light-text mb-2">
                          Business / Company
                        </label>
                        <input
                          type="text"
                          value={formData.business}
                          onChange={(e) => handleChange('business', e.target.value)}
                          className={`${inputBase} ${inputOk}`}
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-light-text mb-2">
                          Email <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                          placeholder="you@business.com"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-light-text mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={`${inputBase} ${inputOk}`}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-light-text mb-2">
                          Service Needed <span className="text-accent-600">*</span>
                        </label>
                        <select
                          value={formData.service_needed}
                          onChange={(e) => handleChange('service_needed', e.target.value)}
                          className={`${inputBase} ${errors.service_needed ? inputErr : inputOk} appearance-none cursor-pointer`}
                        >
                          <option value="" className="bg-light-surface">Select a service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s} className="bg-light-surface">
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.service_needed && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.service_needed}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-light-text mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.estimated_budget}
                          onChange={(e) => handleChange('estimated_budget', e.target.value)}
                          className={`${inputBase} ${inputOk} appearance-none cursor-pointer`}
                        >
                          <option value="" className="bg-light-surface">Select a range</option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b} className="bg-light-surface">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-light-text mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        value={formData.preferred_timeline}
                        onChange={(e) => handleChange('preferred_timeline', e.target.value)}
                        className={`${inputBase} ${inputOk} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-light-surface">Select a timeline</option>
                        {timelineOptions.map((t) => (
                          <option key={t} value={t} className="bg-light-surface">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-light-text mb-2">
                        Project Description <span className="text-accent-600">*</span>
                      </label>
                      <textarea
                        value={formData.project_description}
                        onChange={(e) => handleChange('project_description', e.target.value)}
                        rows={5}
                        className={`${inputBase} ${errors.project_description ? inputErr : inputOk} resize-none`}
                        placeholder="Tell us about your project, goals and any specific requirements..."
                      />
                      {errors.project_description && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.project_description}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-accent-600 text-white hover:bg-accent-700 shadow-lg shadow-accent-600/20 hover:shadow-accent-600/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Project Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <ScrollReveal stagger={1} className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={20} className="text-accent-600" />
                  <h3 className="text-base font-semibold text-light-text">Email</h3>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-light-muted hover:text-light-text transition-colors"
                >
                  {company.email}
                </a>
              </ScrollReveal>

              <ScrollReveal stagger={2} className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={20} className="text-accent-600" />
                  <h3 className="text-base font-semibold text-light-text">Phone</h3>
                </div>
                <a
                  href={`tel:${company.phone}`}
                  className="text-sm text-light-muted hover:text-light-text transition-colors"
                >
                  {company.phone}
                </a>
              </ScrollReveal>

              <ScrollReveal stagger={3} className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle size={20} className="text-accent-600" />
                  <h3 className="text-base font-semibold text-light-text">WhatsApp</h3>
                </div>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-light-muted hover:text-light-text transition-colors"
                >
                  {company.whatsapp}
                </a>
              </ScrollReveal>

              <ScrollReveal stagger={4} className="glass-card rounded-2xl p-8">
                <h3 className="text-base font-semibold text-light-text mb-4">
                  Connect
                </h3>
                <div className="flex gap-3">
                  {[
                    { label: 'Twitter', href: company.social.twitter },
                    { label: 'LinkedIn', href: company.social.linkedin },
                    { label: 'GitHub', href: company.social.github },
                    { label: 'Instagram', href: company.social.instagram },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-light-muted hover:text-light-text transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
