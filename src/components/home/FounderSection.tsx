import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { IMAGES } from '@/data/content';

export default function FounderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const portraitY = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const rotateDeg = useTransform(smoothProgress, [0, 1], [6, -2]);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-white to-purple-50/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-eyebrow block">Leadership</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight">
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-center">
            {/* Parallax Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto md:mx-0"
            >
              <motion.div
                style={{ rotate: rotateDeg }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400 to-amber-500 shadow-xl"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-64 h-80 md:w-full md:h-96">
                <motion.img
                  style={{ y: portraitY, scale: 1.08 }}
                  src={IMAGES.founder}
                  alt="Charles Vallon, Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-center md:text-left"
            >
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-purple-900 mb-2">
                Charles Vallon
              </h3>
              <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-6">
                Founder, Charles Workforce Readiness Foundation
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  Charles Vallon established the Foundation with a deep commitment to preparing
                  young adults for employment, mentorship, career development, and economic
                  opportunity throughout Miami-Dade County and South Florida.
                </p>
                <p>
                  Under his leadership, the Foundation is dedicated to helping young adults ages
                  18-24 develop the practical skills, professional confidence, and career resources
                  needed to transition successfully into the workforce.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-100/60 border border-purple-200">
                <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-sm text-purple-900 font-medium">
                  Founder biography coming soon.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
