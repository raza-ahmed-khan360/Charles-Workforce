import { ArrowRight, MapPin, Mail, Phone, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { INVOLVEMENT } from '@/data/programs';
import { ORG, IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Get Involved"
        subtitle="Whether you're a young adult ready to apply, a volunteer, mentor, employer, or donor — there's a place for you in our mission."
        image={IMAGES.contactHero}
      />

      {/* Get Involved Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <SectionHeading
            center
            eyebrow="Ways to Participate"
            title="Find Your Role"
            subtitle="Choose how you'd like to contribute to workforce readiness for young adults in South Florida."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INVOLVEMENT.map((option, i) => (
              <div key={i} className="group card p-7 hover:-translate-y-1 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-400 transition-all duration-300">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-purple-900 mb-1.5">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-purple group">
              Volunteer / Get Involved
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-base">
          <SectionHeading
            center
            eyebrow="Contact Us"
            title="Let's Connect"
            subtitle="Have a question or ready to get started? Send us a message and we'll get back to you as soon as possible."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-purple-900 mb-1">Location</h3>
                    <p className="text-sm text-gray-600">{ORG.location}</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-purple-900 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">Contact us using the form</p>
                    <p className="text-xs text-gray-400 mt-1">Destination email controlled by the Foundation</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-purple-900 mb-1">Phone</h3>
                    <p className="text-sm text-gray-600">Contact us for more info</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-purple-900 mb-1">Response Time</h3>
                    <p className="text-sm text-gray-600">We aim to respond within 2-3 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="h-[400px] w-full">
          <iframe
            title="Miami-Dade County location map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d114964.52890232303!2d-80.2716!3d25.7828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
