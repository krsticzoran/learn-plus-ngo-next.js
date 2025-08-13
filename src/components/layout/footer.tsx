import { Container } from "./container";
import { links } from "@/data/links";
import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Container as="footer" className="mb-2.5 rounded-4xl bg-white p-8">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        {/* Left section */}
        <div className="flex flex-col">
          <h3 className="mb-2 text-xl font-medium">Let’s keep in touch</h3>
          <p className="text-black-muted/80 mb-6 text-sm">
            Find us on any of these platforms, we’ll answer as soon as possible.
          </p>
          <div className="mb-4 flex gap-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <IconBrandFacebook size={24} stroke={2} />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <IconBrandInstagram size={24} stroke={2} />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <IconBrandYoutube size={24} stroke={2} />
            </Link>
            <a href="mailto:info@example.com" aria-label="Email us">
              {" "}
              <IconMail size={24} stroke={2} />
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex gap-24">
          <div>
            <h3 className="mb-4 text-xl font-medium">Quick Links</h3>
            <ul className="flex flex-col">
              {links.slice(1).map((link) => (
                <li key={link.label} className="mb-2 text-sm">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-medium">Site Info</h3>
            <Link href="/" className="mb-2 text-sm">
              Terms and Conditions
            </Link>
            <Link href="/" className="mb-2 text-sm">
              Privacy Policy
            </Link>
            <p className="text-sm">
              created by{" "}
              <a href="https://zkrstic.dev/" className="text-blue-muted!">
                zkrstic
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-black-muted/20 mt-8 border-t pt-4 text-center">
        <p className="text-sm">© 2025 Learn Plus - All rights reserved.</p>
      </div>
    </Container>
  );
}
