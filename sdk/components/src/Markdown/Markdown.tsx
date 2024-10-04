import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import React from 'react';

import {
  Heading3,
  Heading4,
  Hyperlink,
  ListItem,
  OrderedList,
  TableHeaderCell,
  TableRow,
  UnorderedList,
} from './MarkdownElements';

type MarkdownType = { content: any };

const Markdown = ({ content }: MarkdownType) => (
  <div data-component="cMarkdown">
    {documentToReactComponents(content, {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => <Hyperlink node={node}>{children}</Hyperlink>,
        [BLOCKS.HEADING_3]: (_node, children) => <Heading3>{children}</Heading3>,
        [BLOCKS.HEADING_4]: (_node, children) => <Heading4>{children}</Heading4>,
        [BLOCKS.UL_LIST]: (_node, children) => <UnorderedList>{children}</UnorderedList>,
        [BLOCKS.OL_LIST]: (_node, children) => <OrderedList>{children}</OrderedList>,
        [BLOCKS.LIST_ITEM]: (_node, children) => <ListItem>{children}</ListItem>,
        [BLOCKS.TABLE_HEADER_CELL]: (_node, children) => <TableHeaderCell>{children}</TableHeaderCell>,
        [BLOCKS.TABLE_ROW]: (_node, children) => <TableRow>{children}</TableRow>,
      },
      renderText: (text) =>
        text
          .split('\n')
          .reduce<React.ReactNode[]>((acc, piece, index) => [...acc, index > 0 && <br key={index} />, piece], []),
    })}
  </div>
);

export default Markdown;
