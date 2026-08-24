import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { PROGRAMS } from '@/data/programs';
import { Link } from '@/router';

export default function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="container-base">
        <SectionHeading
          center
          eyebrow="What We Offer"
          title="Programs That Prepare Young Adults for Success"
          subtitle="Comprehensive workforce-readiness programs designed to equip participants with the skills, confidence, and connections they need."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, i) => (
            <div
              key={i}
              className="group card overflow-hidden hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                  <program.icon className="w-5 h-5 text-purple-700" />
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
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/programs" className="btn-purple group">
            Explore All Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
