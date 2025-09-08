// lib/sanitize.ts
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const domPurify = DOMPurify(window);

const sanitizeConfig = {
  ALLOWED_TAGS: [
    "p",
    "br",
    "strong",
    "em",
    "a",
    "ul",
    "ol",
    "li",
    "h1",
    "h2",
    "h3",
    "h4",
  ],
  ALLOWED_ATTR: ["href", "target", "rel"],
  ALLOWED_URI_REGEXP: /^(?:(?:https?|ftp|mailto):|[#a-zA-Z0-9])/,
};

export function sanitizeHtml(content: string): string {
  return domPurify.sanitize(content, sanitizeConfig);
}

export function isSafeUrl(url: string): boolean {
  return /^(https?|ftp|mailto):|^#/.test(url || "");
}

export function getLinkProps(href: string) {
  const safe = isSafeUrl(href);
  return {
    href: safe ? href : undefined,
    target: safe && href.startsWith("http") ? "_blank" : undefined,
    rel:
      safe && href.startsWith("http")
        ? "noopener noreferrer nofollow"
        : undefined,
  };
}
