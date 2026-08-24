import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.about}
                alt="Young adults collaborating in workforce development program"
                className="w-full h-[440px] lg:h-[520px] object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-700 to-purple-500 text-white rounded-2xl p-6 shadow-xl max-w-[200px] hidden sm:block">
              <div className="text-3xl font-display font-bold text-gold-400">18-24</div>
              <div className="text-sm text-purple-100 mt-1">Empowering young adults across South Florida</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gold-400/20 -z-0" />
          </div>

          {/* Text */}
          <div>
            <span className="section-eyebrow">About Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-purple-900 leading-tight mb-6 text-balance">
              About Charles Workforce Readiness Foundation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Charles Workforce Readiness Foundation was established to help bridge the gap
              between young adults and meaningful employment opportunities.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              Entering the workforce requires more than finding a job opening. Young adults need
              preparation, confidence, professional skills, mentorship, resources, and access to
              opportunities. The Foundation provides workforce-readiness education and support to
              help young adults become prepared, competitive, and confident candidates for employment.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Through training, mentoring, partnerships, career development, and employment
              connections, the organization seeks to create pathways from preparation to opportunity
              and from opportunity to long-term success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {['Training & Education', 'Mentorship & Guidance', 'Career Development', 'Employment Connections'].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-purple group">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
