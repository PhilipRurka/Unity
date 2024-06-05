import { BLOCKS, Block, Text, TopLevelBlock } from '@contentful/rich-text-types';

type HeadingValues =
  | BLOCKS.HEADING_1
  | BLOCKS.HEADING_2
  | BLOCKS.HEADING_3
  | BLOCKS.HEADING_4
  | BLOCKS.HEADING_5
  | BLOCKS.HEADING_6;

const textContent = (text: string): Text[] => [
  {
    nodeType: 'text',
    value: text,
    marks: [],
    data: {},
  },
];

const paragraphContent = (text: string): Block[] => [
  {
    nodeType: BLOCKS.PARAGRAPH,
    data: {},
    content: textContent(text),
  },
];

export const createHeading = (nodeType: HeadingValues, text: string) => ({
  nodeType,
  data: {},
  content: textContent(text),
});

export const createTableCell = (text: string, isHeader = false): Block => ({
  nodeType: isHeader ? BLOCKS.TABLE_HEADER_CELL : BLOCKS.TABLE_CELL,
  data: {},
  content: paragraphContent(text),
});

export const createParagraph = (text: string): TopLevelBlock => ({
  nodeType: BLOCKS.PARAGRAPH,
  data: {},
  content: textContent(text),
});
