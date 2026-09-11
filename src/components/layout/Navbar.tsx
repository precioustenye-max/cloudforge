import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/site';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-light-border py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-max section-padding flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    active
                      ? 'text-light-text'
                      : 'text-light-muted hover:text-light-text'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button to="/contact" size="sm">
                Start a Project
              </Button>
            </div>

            <button
              className="lg:hidden text-light-text p-2 -mr-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-white/95 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-display font-semibold py-4 border-b border-light-border transition-all duration-300 ${
                      active
                        ? 'text-light-text'
                        : 'text-light-muted'
                    }`}
                    style={{
                      animation: open
                        ? `fadeUp 0.4s ease-out ${i * 0.06}s both`
                        : 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-8">
              <Button to="/contact" fullWidth size="lg">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
