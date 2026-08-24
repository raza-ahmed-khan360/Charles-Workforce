import { IMAGES } from '@/data/content';

export default function FounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-100/40 rounded-full blur-3xl" />

      <div className="container-base relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-eyebrow block">Leadership</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight">
              Meet Our Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
            {/* Portrait */}
            <div className="relative mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 rotate-3 transition-transform duration-500" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-64 h-80 md:w-full md:h-96">
                <img
                  src={IMAGES.founder}
                  alt="Charles Vallon, Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-purple-900 mb-2">
                Charles Vallon
              </h3>
              <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-6">
                Founder, Charles Workforce Readiness Foundation
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Charles Vallon established the Foundation with a deep commitment to preparing
                  young adults for employment, mentorship, career development, and economic
                  opportunity throughout Miami-Dade County and South Florida.
                </p>
                <p>
                  Under his leadership, the Foundation is dedicated to helping young adults ages
                  18-24 develop the practical skills, professional confidence, and career resources
                  needed to transition successfully into the workforce.
                </p>
              </div>

              {/* Placeholder notice */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 border border-purple-100">
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-sm text-purple-700 font-medium">
                  Founder biography coming soon.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
