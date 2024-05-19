const createTableCell = (text, isHeader = false) => ({
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

const createTable = (rows) => {
  const tableContent = [
    {
      nodeType: 'table-row',
      data: {},
      content: [createTableCell('Keyword', true), createTableCell('Slug', true)],
    },
  ];

  rows.forEach((row) => {
    tableContent.push({
      nodeType: 'table-row',
      data: {},
      content: [createTableCell(row.keyword), createTableCell(row.slug)],
    });
  });

  return {
    nodeType: 'table',
    data: {},
    content: tableContent,
  };
};

const createHeading = (level, text) => ({
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

const createParagraph = (text) => ({
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

const transformIntoContentfulValue = (keywordMatchChecks) => {
  const transformedData = [];

  keywordMatchChecks.forEach((data) => {
    const { id } = data;

    if (data.listOfMissPlacedLinks.length === 0 && data.missingLinks.length === 0) {
      transformedData.push({ id });
      return;
    }

    const content = [];
    const entryTitles = [
      ...new Set(
        data.missingLinks
          .map((link) => link.entryTitle)
          .concat(data.listOfMissPlacedLinks.map((link) => link.entryTitle))
      ),
    ];

    entryTitles.forEach((entryTitle) => {
      content.push(createHeading(2, entryTitle));

      const missingLinks = data.missingLinks.filter((link) => link.entryTitle === entryTitle);
      if (missingLinks.length > 0) {
        content.push(createHeading(3, 'Missing Links'));
        content.push(createTable(missingLinks));
      }

      const missPlacedLinks = data.listOfMissPlacedLinks.filter((link) => link.entryTitle === entryTitle);
      if (missPlacedLinks.length > 0) {
        content.push(createHeading(3, 'Miss Placed Links'));
        content.push(createTable(missPlacedLinks));
      }

      content.push(createParagraph('')); // Add an empty paragraph for spacing
    });

    transformedData.push({
      id,
      transformedData: {
        nodeType: 'document',
        data: {},
        content,
      },
    });
  });

  return transformedData;
};

export default transformIntoContentfulValue;
