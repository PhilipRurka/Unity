import { ReStructureForCaptainsLogLinkCheck } from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../utils/richTextNodeCreation.js';

const createTable = (rows: ReStructureForCaptainsLogLinkCheck[]) => {
  const tableContent = [
    {
      nodeType: 'table-row',
      data: {},
      content: [createTableCell('Slug', true), createTableCell('Underline Count', true)],
    },
  ];

  const sortedRows = rows.sort((a, b) => a.slug.localeCompare(b.slug));

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: 'table-row',
      data: {},
      content: [createTableCell(row.slug), createTableCell(String(row.markUnderlineCount))],
    });
  });

  return {
    nodeType: 'table',
    data: {},
    content: tableContent,
  };
};

const transformIntoValue = (concattedContentArray: ReStructureForCaptainsLogLinkCheck[]) => {
  const content = [];

  content.push(createHeading(2, 'Overview of Incomplete Underlined Items'));
  content.push(createTable(concattedContentArray));
  content.push(createParagraph(''));

  return {
    nodeType: 'document',
    data: {},
    content,
  };
};

export default transformIntoValue;
