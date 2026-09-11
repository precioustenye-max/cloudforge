import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { navLinks, company } from '@/data/site';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const socialIcons = [
    { Icon: Twitter, href: company.social.twitter, label: 'Twitter' },
    { Icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
    { Icon: Github, href: company.social.github, label: 'GitHub' },
    { Icon: Instagram, href: company.social.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-light-border bg-light-surface">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-light-muted leading-relaxed max-w-xs">
              {company.tagline}
            </p>
            <div className="flex gap-3 mt-6">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass glass-hover text-light-muted hover:text-light-text"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-light-text mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-light-muted hover:text-light-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-light-text mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'E-Commerce',
                'Custom Software',
                'Business Automation',
                'UI/UX Design',
                'Digital Transformation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-light-muted hover:text-light-text transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-light-text mb-5 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-sm text-light-muted hover:text-light-text transition-colors"
                >
                  <Mail size={16} className="text-accent-500" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-sm text-light-muted hover:text-light-text transition-colors"
                >
                  <Phone size={16} className="text-accent-500" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-light-muted hover:text-light-text transition-colors"
                >
                  <MessageCircle size={16} className="text-accent-500" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-light-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-subtle">
            &copy; 2026 Cloudforge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-light-subtle hover:text-light-text transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-light-subtle hover:text-light-text transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
