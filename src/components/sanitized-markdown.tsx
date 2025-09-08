import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { sanitizeHtml, getLinkProps } from "@/lib/sanitize";

interface SanitizedMarkdownProps {
  content: string;
  className?: string;
}

export function SanitizedMarkdown({
  content,
  className,
}: SanitizedMarkdownProps) {
  const sanitizedContent = sanitizeHtml(content);

  return (
    <div className={`prose sm:prose-lg ${className}`}>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        components={{
          a: ({ href, children, ...props }) => (
            <a {...props} {...getLinkProps(href || "")}>
              {children}
            </a>
          ),
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  );
}
