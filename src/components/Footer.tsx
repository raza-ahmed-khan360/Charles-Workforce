import { Heart, Facebook, Instagram, Linkedin, Twitter, MapPin, Mail } from 'lucide-react';
import { ORG, NAV_LINKS } from '@/data/content';
import { Link } from '@/router';

export default function Footer() {
  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Accessibility', path: '/accessibility' },
  ];

  return (
    <footer className="bg-purple-950 text-white">
      {/* CTA Bar */}
      <div className="border-b border-white/10">
        <div className="container-base py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display font-bold text-2xl text-white">
              Ready to Become <span className="text-gold-400">Workforce Ready?</span>
            </h3>
            <p className="text-purple-200 text-sm mt-1">
              Take the first step toward your future today.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link to="/contact" className="btn-gold">Apply Today</Link>
            <Link to="/get-involved" className="btn-outline">Volunteer</Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-base py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.jpeg"
                alt="Charles Workforce Readiness Foundation"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Preparing young adults for the workforce through training, mentorship, career development, and employment pathways.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-purple-200 text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              More
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-purple-200 text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-purple-200 text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-purple-200 mb-5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>{ORG.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>Contact us for more info</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-400 hover:text-purple-900 flex items-center justify-center transition-all duration-200"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300">
          <p>&copy; {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-gold-400" />
            <span>Empowering young adults in South Florida</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
