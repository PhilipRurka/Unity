export const createHeading = (level, text) => ({
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

export const createTableCell = (text, isHeader = false) => ({
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

export const createParagraph = (text) => ({
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
