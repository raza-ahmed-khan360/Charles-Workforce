import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { PROGRAMS, STEPS } from '@/data/programs';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Programs That Prepare Young Adults for Success"
        subtitle="Comprehensive workforce-readiness programs designed to equip participants with the skills, confidence, and connections they need to build sustainable careers."
        image={IMAGES.training}
      />

      {/* Programs Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <SectionHeading
            center
            eyebrow="What We Offer"
            title="Our Programs"
            subtitle="Each program is designed to address a specific aspect of workforce readiness and career development."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => (
              <div key={i} className="group card overflow-hidden hover:-translate-y-1 flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <program.icon className="w-5 h-5 text-purple-700" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-purple-900 mb-2 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-base relative">
          <SectionHeading
            center
            light
            eyebrow="The Journey"
            title="How It Works"
            subtitle="From application to success, we guide young adults through every step of their workforce-readiness journey."
          />

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {STEPS.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center shadow-xl border-4 border-purple-950 group-hover:border-gold-400/50 transition-all duration-300 group-hover:scale-105">
                    <span className="font-display font-bold text-2xl text-gold-400">{step.number}</span>
                  </div>
                  <div className="mt-5 bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 group-hover:bg-white/10 group-hover:border-gold-400/30 transition-all duration-300">
                    <h3 className="font-display font-semibold text-lg text-gold-400 text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-purple-100 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 to-white">
        <div className="container-base text-center max-w-2xl mx-auto">
          <SectionHeading
            center
            eyebrow="Ready to Begin?"
            title="Take the First Step Today"
            subtitle="Apply to participate in our workforce-readiness programs and start your journey toward career success."
          />
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-gold group">
              Apply Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/get-involved" className="btn-outline-purple">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
