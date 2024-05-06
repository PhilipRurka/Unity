import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';

type MarkdownType = { content: any };

const Markdown = ({ content }: MarkdownType) => (
  <div data-component="cMarkdown">
    {documentToReactComponents(content, {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => (
          <Link className="inline" href={node.data.uri}>
            {children}
          </Link>
        ),
        [BLOCKS.HEADING_2]: (_node, children) => <h2 className="mb-4 text-3xl">{children}</h2>,
      },
    })}
  </div>
);

export default Markdown;
