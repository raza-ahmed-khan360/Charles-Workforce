import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { STEPS } from '@/data/programs';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const lineScaleX = useTransform(smoothProgress, [0, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeading
          center
          light
          eyebrow="The Journey"
          title="How It Works"
          subtitle="From application to success, we guide young adults through every step of their workforce-readiness journey."
        />

        {/* Desktop Sticky Pinned Progress Experience */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-purple-500 via-gold-400 to-amber-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Number Circle with Pulse & Hover */}
                <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-purple-800 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-purple-950 group-hover:border-gold-400 group-hover:scale-110 transition-all duration-300">
                  <span className="font-display font-bold text-2xl text-gold-400 group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gold-400/20 opacity-0 group-hover:opacity-100 animate-ping pointer-events-none" />
                </div>

                {/* Card with Parallax feel */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="mt-5 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 group-hover:bg-white/15 group-hover:border-gold-400/40 transition-all duration-300 shadow-xl"
                >
                  <h3 className="font-display font-semibold text-lg text-gold-400 text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-purple-100 text-center leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector Line for Mobile */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-3">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gold-400/60 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
