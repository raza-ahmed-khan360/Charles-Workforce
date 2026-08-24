import LegalPage, { LegalSection } from './LegalPage';
import { ORG } from '@/data/content';

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      eyebrow="Legal"
      subtitle="The terms and conditions governing your use of our website and programs."
    >
      <LegalSection title="Acceptance of Terms">
        <p>
          By accessing and using the {ORG.name} website, you accept and agree to be bound by these
          Terms and Conditions. If you do not agree to these terms, please do not use our website.
        </p>
      </LegalSection>

      <LegalSection title="Use of Our Website">
        <p>
          You agree to use our website for lawful purposes only. You must not use our website in any
          way that violates applicable laws, infringes the rights of others, or could damage,
          disable, or impair the website.
        </p>
      </LegalSection>

      <LegalSection title="Program Participation">
        <p>
          Participation in our workforce-readiness programs is subject to eligibility requirements
          and program guidelines. Submitting an application does not guarantee acceptance into any
          program. The Foundation reserves the right to determine eligibility and program
          participation.
        </p>
      </LegalSection>

      <LegalSection title="Donations">
        <p>
          All donations are processed through a payment processor selected by and under the control
          of {ORG.name}. The Foundation does not hold or control donation funds through this
          website. Donations are subject to the terms and conditions of the selected payment
          processor.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos, images, and software, is the
          property of {ORG.name} or its content creators and is protected by intellectual property
          laws. You may not reproduce, distribute, or use our content without prior written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          content, privacy policies, or practices of these external sites.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of Warranties">
        <p>
          Our website and programs are provided "as is" without warranties of any kind, either
          expressed or implied. We do not guarantee that the website will be error-free or
          uninterrupted.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          {ORG.name} shall not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from your use of our website or programs.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Changes will be
          posted on this page with an updated revision date. Continued use of the website after
          changes constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have questions about these Terms and Conditions, please contact us through our
          website's contact form.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
