import { ReactNode } from 'react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import { IMAGES } from '@/data/content';

interface LegalPageProps {
  title: string;
  eyebrow: string;
  subtitle: string;
  children: ReactNode;
}

export default function LegalPage({ title, eyebrow, subtitle, children }: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        image={IMAGES.collaboration}
      />
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-base max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: title }]} />
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-sm text-gray-400 italic">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="font-display font-bold text-xl text-purple-900 mb-3">{title}</h2>
      <div className="space-y-3 text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}
