import { CheckCircle2, Target, Eye, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Purpose"
        title="Mission & Vision"
        subtitle="Guided by a clear mission and a bold vision for the future of young adults in South Florida."
        image={IMAGES.missionHero}
      />

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.missionPageMission}
                  alt="Mentoring session for workforce development"
                  className="w-full h-[440px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full border-4 border-purple-200 -z-0" />
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-2xl bg-gold-400/90 -z-0" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="section-eyebrow mb-0">Our Mission</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-purple-900 leading-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5 font-medium">
                The mission of Charles Workforce Readiness Foundation is to prepare and empower
                young adults ages 17-24 with the practical skills, professional development,
                mentorship, and career resources necessary to successfully transition into the
                workforce and obtain gainful employment.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                We are committed to helping young adults develop the confidence, knowledge,
                workplace readiness, and life skills necessary to build sustainable careers and
                become productive members of their communities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Practical Skills', 'Professional Development', 'Mentorship', 'Career Resources'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-900 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />

        <div className="container-base relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-900" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Our Vision</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-purple-100 leading-relaxed mb-5 font-medium">
                Our vision is a community where every young adult has access to the knowledge,
                skills, resources, mentorship, and opportunities necessary to enter the workforce
                prepared, confident, and ready to succeed.
              </p>
              <p className="text-base text-purple-200 leading-relaxed mb-8">
                We envision young adults overcoming barriers to employment, achieving economic
                independence, developing meaningful careers, and becoming future leaders within
                their communities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Economic Independence', 'Meaningful Careers', 'Future Leaders', 'Community Impact'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span className="text-sm font-medium text-purple-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-gold-400/20">
                <img
                  src={IMAGES.missionPageVision}
                  alt="Young adults in a workshop session"
                  className="w-full h-[440px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 w-28 h-28 rounded-full border-4 border-gold-400/30 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-base">
          <SectionHeading
            center
            eyebrow="Our Commitment"
            title="Preparation. Opportunity. Success."
            subtitle="We are committed to walking alongside young adults every step of the way — from application to long-term career success."
          />
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Through workforce-readiness training, career coaching, mentorship, and employment
              connections, we strive to create a community where every young adult has the
              opportunity to build a brighter future.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/programs" className="btn-purple group">
                Explore Our Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline-purple">
                Apply Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
