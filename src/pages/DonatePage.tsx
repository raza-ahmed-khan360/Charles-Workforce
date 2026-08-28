import { Heart, ArrowRight, Shield, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { DONATE_AREAS } from '@/data/programs';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support Our Mission"
        title="Invest in Workforce Readiness. Invest in Their Future."
        subtitle="Your donation directly supports workforce-readiness programs and creates opportunities for young adults in South Florida."
        image={IMAGES.donateHero}
      />

      {/* Why Donate */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.donateFeature}
                  alt="Young adults in workforce training"
                  className="w-full h-[440px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-500 to-gold-400 text-purple-900 rounded-2xl p-6 shadow-xl hidden sm:block">
                <Heart className="w-8 h-8 mb-1" />
                <div className="font-display font-bold text-sm">Your Impact Matters</div>
              </div>
            </div>

            <div>
              <span className="section-eyebrow">Why Your Support Matters</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-purple-900 leading-tight mb-6 text-balance">
                Every Contribution Creates Opportunity
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Donations support workforce-readiness programs and opportunities for young adults
                in Miami-Dade County and South Florida. Your generosity helps us provide the
                training, resources, and mentorship that participants need to succeed.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                When you invest in Charles Workforce Readiness Foundation, you're not just funding
                a program — you're investing in the future of our community by helping young adults
                build the skills and confidence they need for sustainable careers.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-50">
                  <Shield className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-purple-900">Foundation-Controlled:</span>{' '}
                    All donation processing is fully under the Foundation's ownership and control.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-50">
                  <Sparkles className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-purple-900">Direct Impact:</span>{' '}
                    Your support goes directly toward programs that prepare young adults for employment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-900 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-base relative">
          <SectionHeading
            center
            light
            eyebrow="Where Your Donation Goes"
            title="Your Donation Supports"
            subtitle="Every contribution helps us provide essential programs and resources to young adults preparing for the workforce."
          />
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DONATE_AREAS.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-400/20 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-sm text-purple-100 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 shadow-xl mb-6">
              <Heart className="w-10 h-10 text-purple-900" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-purple-900 leading-tight mb-4 text-balance">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The donation processor will be connected directly to and controlled by Charles
              Workforce Readiness Foundation. Please contact us to complete your donation and
              learn more about how your support makes an impact.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-gold group">
                <Heart className="w-4 h-4" />
                Donate Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/get-involved" className="btn-outline-purple">
                Other Ways to Help
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-400 max-w-xl mx-auto">
              The donation and payment processor remains fully under the ownership and control of
              Charles Workforce Readiness Foundation. The website connects to the processor
              selected by the Foundation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
