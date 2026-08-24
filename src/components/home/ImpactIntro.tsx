import { Briefcase, Target, Users, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const highlights = [
  { icon: Briefcase, title: 'Workforce Readiness', desc: 'Building workplace skills, professionalism, and confidence.' },
  { icon: Target, title: 'Career Preparation', desc: 'Resumes, interviews, job-search strategies, and goal-setting.' },
  { icon: Users, title: 'Mentorship', desc: 'Guidance from professionals who provide real-world insight.' },
  { icon: TrendingUp, title: 'Employment Pathways', desc: 'Connections to internships, jobs, and career opportunities.' },
];

export default function ImpactIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container-base">
        <SectionHeading
          center
          eyebrow="Who We Are"
          title="Building Skills. Creating Opportunity. Preparing Futures."
          subtitle="We help young adults become prepared, confident, and competitive candidates for employment through comprehensive workforce-readiness programs."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group card p-8 text-center hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-5 group-hover:from-purple-600 group-hover:to-purple-400 transition-all duration-300">
                <item.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-purple-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
