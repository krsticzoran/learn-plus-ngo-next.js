import { Container } from "@/components/layout/container";
import Link from "next/link";

export const metadata = {
  title: "Learn Plus - Terms & Conditions",
  description:
    "Terms & Conditions for Learn Plus – the rules that govern the use of our website and services.",
};

export default function TermsPage() {
  return (
    <Container as="main" className="mb-2.5">
      <div className="rounded-4xl bg-white p-6 sm:p-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="text-black-muted/60 mt-2 text-sm">
            Last updated: <time dateTime="2025-08-27">August 27, 2025</time>
          </p>
        </header>

        <section className="space-y-6">
          <p>
            These Terms &amp; Conditions (“Terms”) govern your access to and use
            of the Learn Plus website and any related content or services
            (collectively, the “Service”). By accessing or using the Service,
            you agree to be bound by these Terms and our Privacy Policy. If you
            do not agree, please do not use the Service.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              1. Eligibility &amp; Acceptance
            </h2>
            <p>
              You represent that you are at least the age of majority in your
              jurisdiction and have the legal capacity to enter into these
              Terms. Your continued use of the Service constitutes acceptance of
              the most recent version of these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              2. Use of the Service
            </h2>
            <p>
              You agree to use the Service only for lawful purposes and in a way
              that does not infringe the rights of, restrict, or inhibit anyone
              else’s use and enjoyment of the Service. We may update, suspend,
              or discontinue any part of the Service at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              3. Accounts &amp; Security
            </h2>
            <p>
              If any portion of the Service requires an account, you are
              responsible for maintaining the confidentiality of your
              credentials and for all activities under your account. Notify us
              immediately of any unauthorized use or security breach.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              4. Content &amp; Intellectual Property
            </h2>
            <p>
              All content on the Service—including text, graphics, logos, and
              design—is owned by or licensed to Learn Plus and protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works without prior
              written permission, except as permitted by mandatory law or
              expressly allowed by these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">5. User Submissions</h2>
            <p>
              If you submit feedback or materials, you grant us a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and display
              such materials for the purpose of operating and improving the
              Service. You confirm you have all necessary rights to grant this
              license and that your submissions do not infringe third-party
              rights.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              6. Prohibited Conduct
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Attempting to gain unauthorized access to the Service;</li>
              <li>Interfering with or disrupting the Service or servers;</li>
              <li>Uploading malicious code, scraping, or data mining;</li>
              <li>Infringing any intellectual property or privacy rights;</li>
              <li>Engaging in any unlawful or fraudulent activity.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">7. Third-Party Links</h2>
            <p>
              The Service may include links to third-party websites or services
              that we do not control. We are not responsible for their content,
              policies, or practices. Access them at your own risk and review
              their terms and privacy policies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">8. Disclaimers</h2>
            <p>
              The Service is provided on an “as is” and “as available” basis,
              without warranties of any kind, express or implied, including but
              not limited to implied warranties of merchantability, fitness for
              a particular purpose, and non-infringement. We do not guarantee
              that the Service will be uninterrupted, secure, or error-free.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Learn Plus and its
              affiliates shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits, revenues, data, or goodwill, arising from or related to
              your use of the Service, even if advised of the possibility of
              such damages.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Learn Plus and its
              affiliates from any claims, liabilities, damages, losses, and
              expenses, including reasonable legal fees, arising out of or in
              any way connected with your use of the Service or your violation
              of these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              11. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of the European Union and the
              Republic of Croatia, without regard to conflict of law principles.
              Courts located in the Republic of Croatia shall have exclusive
              jurisdiction over any dispute arising out of or relating to these
              Terms or the Service, subject to mandatory consumer protection
              rules that may provide otherwise.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              12. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Any changes will be
              posted on this page with an updated “Last updated” date. Your
              continued use of the Service after changes become effective
              constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">13. Contact Us</h2>
            <ul className="space-y-1">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:krunoslav.vukelic@gmail.com"
                  className="decoration-black-muted/20 hover:decoration-black-muted/50 underline underline-offset-4"
                >
                  krunoslav.vukelic@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+385992476644"
                  className="decoration-black-muted/20 hover:decoration-black-muted/50 underline underline-offset-4"
                >
                  +385 99 247 66 44
                </a>
              </li>
            </ul>
            <p className="text-black-muted/60 mt-3 text-sm">
              For privacy-related information, please see our{" "}
              <Link
                href="/privacy"
                className="decoration-black-muted/20 hover:decoration-black-muted/50 underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
