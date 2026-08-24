import { useRef } from 'react';
import { Briefcase, Target, Users, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const highlights = [
  { icon: Briefcase, title: 'Workforce Readiness', desc: 'Building workplace skills, professionalism, and confidence.' },
  { icon: Target, title: 'Career Preparation', desc: 'Resumes, interviews, job-search strategies, and goal-setting.' },
  { icon: Users, title: 'Mentorship', desc: 'Guidance from professionals who provide real-world insight.' },
  { icon: TrendingUp, title: 'Employment Pathways', desc: 'Connections to internships, jobs, and career opportunities.' },
];

export default function ImpactIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const orbY = useTransform(smoothProgress, [0, 1], ['-20px', '40px']);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <motion.div
        style={{ y: orbY }}
        className="absolute top-10 right-10 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-base relative z-10">
        <SectionHeading
          center
          eyebrow="Who We Are"
          title="Building Skills. Creating Opportunity. Preparing Futures."
          subtitle="We help young adults become prepared, confident, and competitive candidates for employment through comprehensive workforce-readiness programs."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group card p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/80"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-5 group-hover:from-purple-700 group-hover:to-purple-500 transition-all duration-300 shadow-md">
                <item.icon className="w-7 h-7 text-purple-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-purple-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
