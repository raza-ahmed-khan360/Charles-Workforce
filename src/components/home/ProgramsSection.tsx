import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { PROGRAMS } from '@/data/programs';
import { Link } from '@/router';

export default function ProgramsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const bgY = useTransform(smoothProgress, [0, 1], ['-15px', '25px']);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-base relative z-10">
        <SectionHeading
          center
          eyebrow="What We Offer"
          title="Programs That Prepare Young Adults for Success"
          subtitle="Comprehensive workforce-readiness programs designed to equip participants with the skills, confidence, and connections they need."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group card overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/60"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:bg-gold-400 transition-colors">
                  <program.icon className="w-5 h-5 text-purple-700 group-hover:text-purple-950 transition-colors" />
                </div>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-base text-purple-900 mb-2 leading-snug">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/programs" className="btn-purple group shadow-lg hover:shadow-xl">
            Explore All Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
