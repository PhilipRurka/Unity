import { Blocks } from '@unity/types';

export const createHeading = (level: number, text: string) => ({
  nodeType: `heading-${level}` as Blocks,
  data: {},
  content: [
    {
      nodeType: 'text',
      value: text,
      marks: [],
      data: {},
    },
  ],
});

export const createTableCell = (text: string, isHeader = false) => {
  const type: Blocks = isHeader ? 'table-header-cell' : 'table-cell';

  return {
    nodeType: type,
    data: {},
    content: [
      {
        nodeType: 'paragraph' as Blocks,
        data: {},
        content: [
          {
            nodeType: 'text',
            value: text,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
};

export const createParagraph = (text: string) => ({
  nodeType: 'paragraph' as Blocks,
  data: {},
  content: [
    {
      nodeType: 'text',
      value: text,
      marks: [],
      data: {},
    },
  ],
});
