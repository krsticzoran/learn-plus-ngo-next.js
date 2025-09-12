import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { terms } from "@/data/terms";
import { ContactDetails } from "@/components/sections/contact-details";

export const metadata: Metadata = {
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

          <ContactDetails />
        </section>
      </div>
    </Container>
  );
}
