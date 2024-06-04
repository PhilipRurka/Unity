import { ArticlesKeywordsCheck, Block, Document, TopLevelBlock } from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../utils/richTextNodeCreation.js';

const createTable = (rows: ArticlesKeywordsCheck[]) => {
  const tableContent: Block[] = [
    {
      nodeType: 'table-row',
      data: {},
      content: [
        createTableCell('Slug', true) as Block,
        createTableCell('Miss Placed Links', true) as Block,
        createTableCell('Missing Links', true) as Block,
      ],
    },
  ];

  const sortedRows = rows.sort((a, b) => a.slug.localeCompare(b.slug));

  sortedRows.forEach((row) => {
    if (row.listOfMissPlacedLinks.length === 0 && row.missingLinks.length === 0) return;

    tableContent.push({
      nodeType: 'table-row',
      data: {},
      content: [
        createTableCell(row.slug) as Block,
        createTableCell(String(row.listOfMissPlacedLinks.length)) as Block,
        createTableCell(String(row.missingLinks.length)) as Block,
      ],
    });
  });

  return {
    nodeType: 'table',
    data: {},
    content: tableContent,
  };
};

const transformIntoCaptainsLogValue = (keywordMatchChecks: ArticlesKeywordsCheck[]): Document => {
  const content = [];

  content.push(createHeading(2, 'Overview of Keyword Links Check') as TopLevelBlock);
  content.push(createTable(keywordMatchChecks) as TopLevelBlock);
  content.push(createParagraph('') as TopLevelBlock);

  return {
    nodeType: 'document',
    data: {},
    content,
  };
};

export default transformIntoCaptainsLogValue;
