import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const imageY = useTransform(smoothProgress, [0, 1], ['-8%', '8%']);
  const cardY = useTransform(smoothProgress, [0, 1], ['20px', '-30px']);
  const badgeY = useTransform(smoothProgress, [0, 1], ['-25px', '25px']);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Parallax Image & Floating Accent Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                style={{ y: imageY, scale: 1.1 }}
                src={IMAGES.about}
                alt="Young adults collaborating in workforce development program"
                className="w-full h-[440px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
            </div>

            {/* Parallax Floating accent card */}
            <motion.div
              style={{ y: cardY }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-800 to-purple-600 text-white rounded-2xl p-6 shadow-2xl max-w-[210px] hidden sm:block border border-white/20"
            >
              <div className="text-3xl font-display font-bold text-gold-400">18-24</div>
              <div className="text-xs text-purple-100 mt-1 leading-snug">
                Empowering young adults across South Florida
              </div>
            </motion.div>

            {/* Parallax Top Badge */}
            <motion.div
              style={{ y: badgeY }}
              className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gold-400/20 -z-0"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-eyebrow">About Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight mb-6 text-balance">
              About Charles Workforce Readiness Foundation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Charles Workforce Readiness Foundation was established to help bridge the gap
              between young adults and meaningful employment opportunities.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              Entering the workforce requires more than finding a job opening. Young adults need
              preparation, confidence, professional skills, mentorship, resources, and access to
              opportunities. The Foundation provides workforce-readiness education and support to
              help young adults become prepared, competitive, and confident candidates for employment.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Through training, mentoring, partnerships, career development, and employment
              connections, the organization seeks to create pathways from preparation to opportunity
              and from opportunity to long-term success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {['Training & Education', 'Mentorship & Guidance', 'Career Development', 'Employment Connections'].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-purple group">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
