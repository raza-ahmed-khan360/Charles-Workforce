import { ArrowRight, Heart, Users } from 'lucide-react';
import { Link } from '@/router';
import { IMAGES } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Diverse young adults participating in workforce readiness training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/95 via-purple-800/80 to-purple-600/65" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="container-base relative z-10 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 backdrop-blur border border-gold-400/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Workforce Ready.
            </span>
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] text-balance">
            Preparing Young Adults for the{' '}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Workforce
            </span>{' '}
            and the Future
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-purple-100 leading-relaxed max-w-2xl">
            Charles Workforce Readiness Foundation empowers young adults ages 18-24 with the
            skills, confidence, resources, mentorship, and career preparation needed to pursue
            gainful employment and long-term professional success.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold group">
              Apply Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/donate" className="btn-purple">
              <Heart className="w-4 h-4" />
              Donate
            </Link>
            <Link to="/get-involved" className="btn-outline">
              <Users className="w-4 h-4" />
              Volunteer
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
