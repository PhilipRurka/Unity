import { Block, Inline } from '@contentful/rich-text-types';
import Link from 'next/link';

type MarkdownElementProps = {
  children: React.ReactNode;
  node?: Block | Inline;
};

export const Heading3 = ({ children }: MarkdownElementProps) => <h3 className="mb-4 mt-12 text-3xl">{children}</h3>;

export const Heading4 = ({ children }: MarkdownElementProps) => <h4 className="mb-4 mt-12 text-2xl">{children}</h4>;

export const UnorderedList = ({ children }: MarkdownElementProps) => (
  <ul className="mt-2 list-disc pl-5">{children}</ul>
);

export const OrderedList = ({ children }: MarkdownElementProps) => (
  <ol className="mt-2 list-decimal pl-5">{children}</ol>
);

export const ListItem = ({ children }: MarkdownElementProps) => <li className="mb-1">{children}</li>;

export const Hyperlink = ({ children, node }: MarkdownElementProps) => (
  <Link className="inline text-blue-500 hover:text-blue-900" href={node?.data.uri}>
    {children}
  </Link>
);
