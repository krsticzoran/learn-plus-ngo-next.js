import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
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
    <div className={`prose sm:prose-lg list-inside list-disc ${className}`}>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkBreaks]}
        components={{
          a: ({ href, children, ...props }) => (
            <a
              {...props}
              {...getLinkProps(href || "")}
              className="!text-blue-muted underline underline-offset-2"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-inside list-disc">{children}</ul>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  );
}
