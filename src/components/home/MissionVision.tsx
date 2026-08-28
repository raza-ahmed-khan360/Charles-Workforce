import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { IMAGES } from '@/data/content';

interface MissionVisionProps {
  variant: 'mission' | 'vision';
}

const CONTENT = {
  mission: {
    eyebrow: 'Our Mission',
    title: 'Our Mission',
    statement:
      'The mission of Charles Workforce Readiness Foundation is to prepare and empower young adults ages 18-24 with the practical skills, professional development, mentorship, and career resources necessary to successfully transition into the workforce and obtain gainful employment.',
    supporting:
      'We are committed to helping young adults develop the confidence, knowledge, workplace readiness, and life skills necessary to build sustainable careers and become productive members of their communities.',
    image: IMAGES.mission,
    points: ['Practical Skills', 'Professional Development', 'Mentorship', 'Career Resources'],
    bgColor: 'bg-purple-50',
  },
  vision: {
    eyebrow: 'Our Vision',
    title: 'Our Vision',
    statement:
      'Our vision is a community where every young adult has access to the knowledge, skills, resources, mentorship, and opportunities necessary to enter the workforce prepared, confident, and ready to succeed.',
    supporting:
      'We envision young adults overcoming barriers to employment, achieving economic independence, developing meaningful careers, and becoming future leaders within their communities.',
    image: IMAGES.vision,
    points: ['Economic Independence', 'Meaningful Careers', 'Future Leaders', 'Community Impact'],
    bgColor: 'bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800',
  },
};

export default function MissionVision({ variant }: MissionVisionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const imageY = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const accent1Y = useTransform(smoothProgress, [0, 1], ['25px', '-25px']);
  const accent2Y = useTransform(smoothProgress, [0, 1], ['-35px', '35px']);

  const content = CONTENT[variant];
  const isVision = variant === 'vision';
  const isReversed = isVision;

  return (
    <section
      ref={sectionRef}
      className={`py-20 lg:py-28 ${content.bgColor} relative overflow-hidden`}
    >
      {isVision && <div className="absolute inset-0 bg-grid opacity-10" />}
      <div className="container-base relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
          
          {/* Image with Parallax & Accent Shapes */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}
          >
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${isVision ? 'ring-4 ring-gold-400/30' : ''}`}>
              <motion.img
                style={{ y: imageY, scale: 1.08 }}
                src={content.image}
                alt="Young adults engaged in workforce development activities"
                className="w-full h-[420px] lg:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent" />
            </div>

            {/* Parallax Decorative accents */}
            <motion.div
              style={{ y: accent1Y }}
              className={`absolute -bottom-5 ${isReversed ? '-left-5' : '-right-5'} w-24 h-24 rounded-2xl bg-gold-400 opacity-90 -z-0 shadow-lg`}
            />
            <motion.div
              style={{ y: accent2Y }}
              className={`absolute -top-5 ${isReversed ? '-right-5' : '-left-5'} w-32 h-32 rounded-full border-4 ${isVision ? 'border-gold-400/40' : 'border-purple-300'} -z-0`}
            />
          </motion.div>

          {/* Text with Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <span className={`section-eyebrow ${isVision ? 'text-gold-400' : ''}`}>
              {content.eyebrow}
            </span>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 ${isVision ? 'text-white' : 'text-purple-900'}`}>
              {content.title}
            </h2>
            <p className={`text-lg leading-relaxed mb-5 ${isVision ? 'text-purple-100' : 'text-gray-700'}`}>
              {content.statement}
            </p>
            <p className={`text-base leading-relaxed mb-8 ${isVision ? 'text-purple-200' : 'text-gray-600'}`}>
              {content.supporting}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {content.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${isVision ? 'text-gold-400' : 'text-purple-600'}`} />
                  <span className={`text-sm font-medium ${isVision ? 'text-purple-100' : 'text-gray-700'}`}>
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
