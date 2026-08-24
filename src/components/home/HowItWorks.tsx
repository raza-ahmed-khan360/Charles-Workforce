import SectionHeading from '@/components/SectionHeading';
import { STEPS } from '@/data/programs';

export default function HowItWorks() {
  return (
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
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <div key={i} className="relative group">
                {/* Number Circle */}
                <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center shadow-xl border-4 border-purple-950 group-hover:border-gold-400/50 transition-all duration-300 group-hover:scale-105">
                  <span className="font-display font-bold text-2xl text-gold-400">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="mt-5 bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 group-hover:bg-white/10 group-hover:border-gold-400/30 transition-all duration-300">
                  <h3 className="font-display font-semibold text-lg text-gold-400 text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-purple-100 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-3">
                    <div className="w-px h-8 bg-gradient-to-b from-gold-400/40 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
