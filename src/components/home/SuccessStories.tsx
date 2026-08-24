import { MessageCircle, Building2, Star, BarChart3, Quote } from 'lucide-react';
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
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container-base">
        <SectionHeading
          center
          eyebrow="Impact"
          title="Success Stories"
          subtitle="The real impact of our programs will be shared here as participants, employers, and partners share their experiences and outcomes."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholders.map((item, i) => (
            <div key={i} className="card p-8 text-center hover:-translate-y-1 relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-100" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-display font-semibold text-base text-purple-900 mb-4">
                {item.title}
              </h3>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-50 border border-gold-200">
                <span className="text-xs font-semibold text-gold-700">{item.placeholder}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <p className="text-sm text-gray-600">
              Verified impact data and testimonials will be featured here as they become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
