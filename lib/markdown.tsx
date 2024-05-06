import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

type MarkdownType = { content: any };

const Markdown = ({ content }: MarkdownType) =>
  documentToReactComponents(content, {
    renderNode: {
      [BLOCKS.HEADING_2]: (_node, children) => <h2 className="text-4xl">{children}</h2>,
    },
  });

export default Markdown;
