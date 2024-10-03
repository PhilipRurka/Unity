import { BLOCKS, Document, TopLevelBlock } from '@contentful/rich-text-types';

import { ArticlesKeywordsCheck } from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../../../utils';

const createTable = (rows: ArticlesKeywordsCheck[]): TopLevelBlock => {
  const tableContent = [
    {
      nodeType: BLOCKS.TABLE_ROW,
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
    if (row.listOfMissPlacedLinks.length === 0 && row.missingLinks.length === 0) return;

    tableContent.push({
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [
        createTableCell(row.slug),
        createTableCell(String(row.listOfMissPlacedLinks.length)),
        createTableCell(String(row.missingLinks.length)),
      ],
    });
  });

  return {
    nodeType: BLOCKS.TABLE,
    data: {},
    content: tableContent,
  };
};

const transformIntoCaptainsLogValue = (keywordMatchChecks: ArticlesKeywordsCheck[]): Document => {
  const content: Document['content'] = [];

  content.push(createHeading(BLOCKS.HEADING_2, 'Overview of Keyword Links Check'));
  content.push(createTable(keywordMatchChecks));
  content.push(createParagraph(''));

  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content,
  };
};

export default transformIntoCaptainsLogValue;
