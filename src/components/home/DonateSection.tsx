import { useRef } from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DONATE_AREAS } from '@/data/programs';
import { Link } from '@/router';

export default function DonateSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const orb1Y = useTransform(smoothProgress, [0, 1], ['-30px', '40px']);
  const orb2Y = useTransform(smoothProgress, [0, 1], ['30px', '-40px']);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-base relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 backdrop-blur border border-gold-400/30 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                Support Our Mission
              </span>
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6 text-balance">
              Invest in Workforce Readiness.{' '}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Invest in Their Future.
              </span>
            </h2>

            <p className="text-lg text-purple-100 leading-relaxed mb-8">
              Your donation directly supports workforce-readiness programs and creates
              opportunities for young adults in South Florida. Every contribution helps us
              provide training, resources, and mentorship to those who need it most.
            </p>

            <Link to="/donate" className="btn-gold group shadow-xl hover:shadow-2xl">
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - Support Areas with Staggered Fade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/15 shadow-2xl"
          >
            <h3 className="font-display font-semibold text-white text-lg mb-5">
              Your Donation Supports
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DONATE_AREAS.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold-400/30 transition-all duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                  <span className="text-sm text-purple-100 font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
