import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { BOARD_MEMBERS } from '@/data/content';

export default function BoardSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const orb1Y = useTransform(smoothProgress, [0, 1], ['-20px', '30px']);
  const orb2Y = useTransform(smoothProgress, [0, 1], ['25px', '-25px']);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 relative overflow-hidden border-t border-purple-100/60"
    >
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold-200/25 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/35 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-base relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="section-eyebrow block">Governance & Leadership</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight">
            Board of Directors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Committed leaders providing strategic guidance, operational excellence, and responsible stewardship in service of our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {BOARD_MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100/70 bg-white group hover:-translate-y-1.5"
            >
              {/* Image Frame (aspect-[3/4] perfectly matches the 1086x1448 portrait ratio without cropping) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-700 text-xs font-bold uppercase tracking-wider">
                    {member.role.split('|')[0].trim()}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-purple-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-700/80 font-semibold text-xs uppercase tracking-wider mb-4">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {member.bio}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-purple-800/80 font-medium">
                  <span>Charles Workforce Readiness Foundation</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
