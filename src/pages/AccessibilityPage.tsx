import LegalPage, { LegalSection } from './LegalPage';
import { ORG } from '@/data/content';

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      eyebrow="Legal"
      subtitle="Our commitment to making our website accessible to everyone."
    >
      <LegalSection title="Our Commitment">
        <p>
          {ORG.name} is committed to ensuring digital accessibility for people with disabilities.
          We are continuously improving the user experience for everyone and applying the relevant
          accessibility standards to ensure our website is accessible to all.
        </p>
      </LegalSection>

      <LegalSection title="Conformance Status">
        <p>
          We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
          These guidelines explain how to make web content more accessible for people with
          disabilities and user-friendly for everyone.
        </p>
      </LegalSection>

      <LegalSection title="Accessibility Features">
        <p>Our website incorporates the following accessibility features:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
          <li>Semantic HTML structure for screen reader compatibility.</li>
          <li>Keyboard navigation support for all interactive elements.</li>
          <li>Sufficient color contrast between text and background colors.</li>
          <li>Descriptive alt text for meaningful images.</li>
          <li>Responsive design that adapts to different screen sizes and devices.</li>
          <li>Clear and consistent navigation throughout the website.</li>
          <li>Form fields with associated labels and instructions.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Assistive Technology Compatibility">
        <p>
          We aim to ensure compatibility with commonly used assistive technologies, including
          screen readers, voice recognition software, and keyboard-only navigation.
        </p>
      </LegalSection>

      <LegalSection title="Ongoing Efforts">
        <p>
          Accessibility is an ongoing effort. We regularly review our website to identify and
          address accessibility issues and incorporate best practices as they evolve.
        </p>
      </LegalSection>

      <LegalSection title="Feedback">
        <p>
          If you encounter any accessibility barriers on our website or have suggestions for
          improvement, please contact us through our website's contact form. We value your feedback
          and are committed to making our website accessible to everyone.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Content">
        <p>
          While we strive to ensure accessibility across our website, some third-party content or
          features may not fully conform to accessibility standards. We encourage third-party
          providers to improve their accessibility.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
