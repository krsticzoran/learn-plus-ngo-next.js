import { Container } from "@/components/layout/container";
import Link from "next/link";
import { terms } from "@/data/terms";

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

          {terms.map((section) => (
            <div key={section.id}>
              <h2 className="mb-2 text-xl font-semibold">{section.title}</h2>

              {section.content && <p>{section.content}</p>}

              {section.list && (
                <ul className="list-disc space-y-1 pl-6">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

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
