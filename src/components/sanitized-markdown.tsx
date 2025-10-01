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
    <div className={`prose sm:prose-lg ${className}`}>
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
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  );
}
