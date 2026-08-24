import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, Heart } from 'lucide-react';
import { NAV_LINKS, ORG } from '@/data/content';
import { Link } from '@/router';

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-white/80 backdrop-blur-sm py-3'
        }`}
      >
        <div className="container-base flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gold-400 border-2 border-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm text-purple-900 leading-tight">
                Charles Workforce
              </div>
              <div className="font-display font-bold text-sm text-purple-900 leading-tight">
                Readiness Foundation
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-600 mt-0.5">
                {ORG.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-purple-700 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-gold-600 transition-colors px-3 py-2"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
            <Link to="/contact" className="btn-gold">
              Apply Today
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-purple-800 hover:bg-purple-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="font-display font-bold text-purple-900 text-sm">
                {ORG.name}
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-gray-700 hover:bg-purple-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-100 space-y-3">
              <Link to="/contact" className="btn-gold w-full">
                Apply Today
              </Link>
              <Link to="/donate" className="btn-outline-purple w-full">
                <Heart className="w-4 h-4" /> Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
