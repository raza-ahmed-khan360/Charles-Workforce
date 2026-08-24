import LegalPage, { LegalSection } from './LegalPage';
import { ORG } from '@/data/content';

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="Legal"
      subtitle="Your privacy is important to us. This policy explains how we handle your information."
    >
      <LegalSection title="Introduction">
        <p>
          {ORG.name} ("the Foundation," "we," "us," or "our") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and safeguard your information
          when you visit our website or interact with our programs.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
          <li><strong>Contact information:</strong> Name, email address, telephone number, and organization/company when you submit our contact form.</li>
          <li><strong>Communication preferences:</strong> The reason for your contact and your message content.</li>
          <li><strong>Technical data:</strong> Basic browser and device information for website functionality and security.</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
          <li>Respond to your inquiries and provide information about our programs.</li>
          <li>Process applications for program participation.</li>
          <li>Coordinate volunteer, mentor, and partnership opportunities.</li>
          <li>Improve our website and programs.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Information Sharing">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          information with trusted partners who assist us in operating our programs, conducting
          our business, or serving you, so long as those parties agree to keep this information
          confidential.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Our website may use cookies and similar technologies to enhance your browsing experience.
          You can configure your browser to refuse cookies, though some features may not function
          properly without them.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          You have the right to request access to, correction of, or deletion of your personal
          information. To exercise these rights, please contact us through our website's contact form.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our programs serve young adults ages 18-24. We do not knowingly collect personal
          information from individuals under 18 through our website.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated revision date.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact us through our website's
          contact form.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
