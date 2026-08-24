import { MessageCircle, Building2, Star, BarChart3, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const placeholders = [
  {
    icon: MessageCircle,
    title: 'Participant Testimonials',
    placeholder: 'Testimonial coming soon',
  },
  {
    icon: Building2,
    title: 'Employer Testimonials',
    placeholder: 'Testimonial coming soon',
  },
  {
    icon: Star,
    title: 'Success Stories',
    placeholder: 'Success story coming soon',
  },
  {
    icon: BarChart3,
    title: 'Program Outcomes',
    placeholder: 'Verified impact data coming soon',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/70 relative overflow-hidden">
      <div className="container-base relative z-10">
        <SectionHeading
          center
          eyebrow="Impact"
          title="Success Stories"
          subtitle="The real impact of our programs will be shared here as participants, employers, and partners share their experiences and outcomes."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="card p-8 text-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-100/80" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-5 shadow-sm">
                <item.icon className="w-7 h-7 text-purple-700" />
              </div>
              <h3 className="font-display font-semibold text-base text-purple-900 mb-4">
                {item.title}
              </h3>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-50 border border-gold-200/80">
                <span className="text-xs font-semibold text-gold-700">{item.placeholder}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200/80 shadow-md">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <p className="text-sm text-gray-600 font-medium">
              Verified impact data and testimonials will be featured here as they become available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
