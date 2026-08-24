import { ArrowRight, CheckCircle2, Target, Eye, Users, Building2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FounderSection from '@/components/home/FounderSection';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Mission-Driven', desc: 'Every program is designed to prepare young adults for the workforce.' },
    { icon: Users, title: 'Community-Focused', desc: 'We serve young adults ages 18-24 across Miami-Dade County and South Florida.' },
    { icon: Building2, title: 'Partnership-Oriented', desc: 'We collaborate with employers, educators, and community organizations.' },
    { icon: Eye, title: 'Future-Looking', desc: 'We build pathways from preparation to long-term career success.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Charles Workforce Readiness Foundation"
        subtitle="Bridging the gap between young adults and meaningful employment opportunities in South Florida."
        image={IMAGES.about}
      />

      {/* Main About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.collaboration}
                  alt="Young adults in workforce development program"
                  className="w-full h-[460px] lg:h-[540px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-700 to-purple-500 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                <div className="text-3xl font-display font-bold text-gold-400">18-24</div>
                <div className="text-sm text-purple-100 mt-1">Ages we serve</div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gold-400/20 -z-0" />
            </div>

            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-purple-900 leading-tight mb-6">
                Creating Pathways from Preparation to Opportunity
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Charles Workforce Readiness Foundation was established to help bridge the gap
                  between young adults and meaningful employment opportunities.
                </p>
                <p>
                  Entering the workforce requires more than finding a job opening. Young adults
                  need preparation, confidence, professional skills, mentorship, resources, and
                  access to opportunities.
                </p>
                <p>
                  The Foundation provides workforce-readiness education and support to help young
                  adults become prepared, competitive, and confident candidates for employment.
                </p>
                <p>
                  Through training, mentoring, partnerships, career development, and employment
                  connections, the organization seeks to create pathways from preparation to
                  opportunity and from opportunity to long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-base">
          <SectionHeading
            center
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card p-8 text-center hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-purple-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Where We Serve</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-purple-900 leading-tight mb-6">
                Serving Miami-Dade County & South Florida
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Charles Workforce Readiness Foundation is dedicated to serving young adults
                throughout Miami-Dade County and the broader South Florida community. We work to
                ensure that workforce-readiness resources, training, and mentorship are accessible
                to those who need them most.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Miami-Dade County', 'South Florida', 'Ages 18-24', 'Workforce Development'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-purple group">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
              <iframe
                title="Miami-Dade County service area map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d114964.52890232303!2d-80.2716!3d25.7828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <FounderSection />
    </>
  );
}
