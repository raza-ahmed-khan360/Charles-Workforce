import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { INVOLVEMENT } from '@/data/programs';
import { Link } from '@/router';

export default function GetInvolvedSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-base">
        <SectionHeading
          center
          eyebrow="Join Us"
          title="Get Involved"
          subtitle="Whether you're an individual, business, or organization, there are many ways to support young adults on their journey to workforce readiness."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INVOLVEMENT.map((option, i) => (
            <div
              key={i}
              className="group card p-7 hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-400 transition-all duration-300">
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-purple-900 mb-1.5">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/get-involved" className="btn-purple group">
            Volunteer / Get Involved
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
