import { useEffect } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  useEffect(() => {
    document.title = `${title} | Charles Workforce Readiness Foundation`;
  }, [title]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/95 via-purple-800/85 to-purple-600/75" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <div className="container-base relative">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
            {eyebrow}
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-purple-100 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
