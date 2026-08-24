import { useRef } from 'react';
import { ArrowRight, Heart, Users, Award, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from '@/router';
import { IMAGES } from '@/data/content';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Parallax layers
  const bgY = useTransform(smoothScrollY, [0, 1], ['0%', '25%']);
  const textY = useTransform(smoothScrollY, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothScrollY, [0, 0.8], [1, 0]);
  const cardY = useTransform(smoothScrollY, [0, 1], ['0%', '-25%']);
  const orb1Y = useTransform(smoothScrollY, [0, 1], ['0%', '-40%']);
  const orb2Y = useTransform(smoothScrollY, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-purple-950"
    >
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img
          src={IMAGES.hero}
          alt="Diverse young adults participating in workforce readiness training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/95 via-purple-900/85 to-purple-800/70" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </motion.div>

      {/* Decorative Parallax Orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-1/4 right-10 w-72 h-72 bg-gold-400/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="container-base relative z-10 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text */}
          <motion.div
            style={{ y: textY, opacity }}
            className="lg:col-span-7 xl:col-span-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 backdrop-blur border border-gold-400/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Workforce Ready.
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] text-balance"
            >
              Preparing Young Adults for the{' '}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-300 bg-clip-text text-transparent">
                Workforce
              </span>{' '}
              and the Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-purple-100 leading-relaxed max-w-2xl"
            >
              Charles Workforce Readiness Foundation empowers young adults ages 18-24 with the
              skills, confidence, resources, mentorship, and career preparation needed to pursue
              gainful employment and long-term professional success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
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
            </motion.div>
          </motion.div>

          {/* Floating Parallax Card Showcase (Desktop) */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:col-span-5 xl:col-span-4 relative"
          >
            <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg">100% Dedicated</div>
                  <div className="text-xs text-purple-200">Youth Career Preparation</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg">Ages 18-24</div>
                  <div className="text-xs text-purple-200">Focused Empowerment</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-800/60 to-purple-900/60 border border-purple-400/20 text-center">
                <div className="text-2xl font-bold text-gold-400 font-display">Workforce Ready</div>
                <div className="text-xs text-purple-200 mt-1">Mentorship & Pathways</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
