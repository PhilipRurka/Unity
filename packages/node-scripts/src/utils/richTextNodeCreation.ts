export const createHeading = (level: number, text: string) => ({
  nodeType: `heading-${level}`,
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

export const createTableCell = (text: string, isHeader = false) => ({
  nodeType: isHeader ? 'table-header-cell' : 'table-cell',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
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
});

export const createParagraph = (text: string) => ({
  nodeType: 'paragraph',
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
