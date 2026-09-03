import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { IMAGES } from '@/data/content';

export default function ExecutiveDirectorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const portraitY = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const rotateDeg = useTransform(smoothProgress, [0, 1], [-6, 2]);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-purple-100/60">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-base relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-eyebrow block">Executive Leadership</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight">
              Meet Our Executive Director
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] gap-8 lg:gap-16 items-center">
            {/* Parallax Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto md:mx-0 w-full max-w-[450px] md:max-w-none"
            >
              <motion.div
                style={{ rotate: rotateDeg }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-amber-500 shadow-xl"
              />
              <motion.div
                style={{ y: portraitY }}
                className="relative rounded-3xl overflow-hidden shadow-2xl w-full aspect-[3/4]"
              >
                <img
                  src={IMAGES.executiveDirector}
                  alt="Tiffinay Cage, Executive Director / Vice Chairman"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
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
                Tiffinay Cage
              </h3>
              <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-6">
                Executive Director/ Vice Chairman | Charles Workforce Readiness Foundation
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  Tiffinay Cage, a Miami native and proud graduate of Miami Central Senior High, attended Miami Dade Community College and has built a career grounded in service, leadership, and faith. With a strong background in corporate America, she has held leadership roles throughout her career, bringing proven management experience and a steady, people-first approach.
                </p>
                <p>
                  An entrepreneur, fashion stylist and designer, realtor, makeup artist, and motivational speaker, Tiffinay is known for her outgoing spirit and commitment to uplifting others. She founded Golden Girls, a women’s empowerment group, creating safe, supportive spaces where women build confidence and navigate life’s challenges.
                </p>
                <p>
                  As Executive Director of Charles Workforce Readiness Foundation, Tiffinay is passionate about helping young adults gain skills, confidence, and clear pathways to meaningful employment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
