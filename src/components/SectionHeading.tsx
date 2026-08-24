interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  light,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className={`section-eyebrow ${center ? 'block' : ''} ${light ? 'text-gold-400' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance ${
          light ? 'text-white' : 'text-purple-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-purple-100' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
