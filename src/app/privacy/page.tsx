import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Learn Plus - Privacy Policy",
  description:
    "Privacy Policy for Learn Plus – how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <Container as="main" className="mb-2.5">
      <div className="rounded-4xl bg-white p-6 sm:p-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-black-muted/60 mt-2 text-sm">
            Last updated: <time dateTime="2025-08-27">August 27, 2025</time>
          </p>
        </header>

        <section className="space-y-6">
          <p>
            We respect your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and protect your data when you use our website, in accordance
            with applicable laws of the European Union and the Republic of
            Croatia (including GDPR).
          </p>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Information We Collect
            </h2>
            <p>
              At this moment, our website does{" "}
              <span className="font-semibold">not</span> collect any personal
              information automatically (e.g., via cookies or analytics). The
              only information you may provide is when you choose to contact us
              directly (for example, by email or phone).
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              How We Use Information
            </h2>
            <p>
              Any information you voluntarily share (such as by sending an email
              or calling us) will be used solely to respond to your inquiry and
              provide the requested information or services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise share your personal
              information with third parties, unless required by law or with
              your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Cookies</h2>
            <p>
              Our website currently does{" "}
              <span className="font-semibold">not</span> use cookies or tracking
              technologies. If this changes in the future, we will update this
              Policy and provide you with appropriate options and disclosures.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Data Security</h2>
            <p>
              We take reasonable measures to protect the information you share
              with us. However, please note that no method of transmission over
              the Internet or method of electronic storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Your Rights</h2>
            <p>
              Subject to applicable law, you may request access to, correction
              of, or deletion of the personal information you have shared with
              us, as well as object to or restrict processing. You also have the
              right to lodge a complaint with the competent data protection
              authority.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last updated” date.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Contact Us</h2>
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
          </div>
        </section>
      </div>
    </Container>
  );
}
