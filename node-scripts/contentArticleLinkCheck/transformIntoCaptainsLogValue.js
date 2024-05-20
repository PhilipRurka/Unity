import { createHeading, createParagraph, createTableCell } from '../utils/richTextNodeCreation.js';

const createTable = (rows) => {
  const tableContent = [
    {
      nodeType: 'table-row',
      data: {},
      content: [
        createTableCell('Slug', true),
        createTableCell('Miss Placed Links', true),
        createTableCell('Missing Links', true),
      ],
    },
  ];

  const sortedRows = rows.sort((a, b) => a.slug.localeCompare(b.slug));

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: 'table-row',
      data: {},
      content: [
        createTableCell(row.slug),
        createTableCell(String(row.listOfMissPlacedLinks.length)),
        createTableCell(String(row.missingLinks.length)),
      ],
    });
  });

  return {
    nodeType: 'table',
    data: {},
    content: tableContent,
  };
};

const transformIntoCaptainsLogValue = (keywordMatchChecks) => {
  const content = [];

  content.push(createHeading(2, 'Overview of Keyword Links Check'));
  content.push(createTable(keywordMatchChecks));
  content.push(createParagraph(''));

  return {
    nodeType: 'document',
    data: {},
    content,
  };
};

export default transformIntoCaptainsLogValue;
