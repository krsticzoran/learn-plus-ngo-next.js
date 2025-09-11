import { Container } from "@/components/layout/container";
import { privacySections } from "@/data/privacy";

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
          {privacySections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 text-xl font-semibold">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}

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
