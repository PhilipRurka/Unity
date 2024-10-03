import { BLOCKS, Document, TopLevelBlock } from '@contentful/rich-text-types';

import { ReStructureForCaptainsLogLinkCheck } from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../../../utils';

const createTable = (rows: ReStructureForCaptainsLogLinkCheck[]): TopLevelBlock => {
  const tableContent = [
    {
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell('Slug', true), createTableCell('Underline Count', true)],
    },
  ];

  const sortedRows = rows.sort((a, b) => a.slug.localeCompare(b.slug));

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell(row.slug), createTableCell(String(row.markUnderlineCount))],
    });
  });

  return {
    nodeType: BLOCKS.TABLE,
    data: {},
    content: tableContent,
  };
};

const transformIntoValue = (concattedContentArray: ReStructureForCaptainsLogLinkCheck[]): Document => {
  const content: Document['content'] = [];

  content.push(createHeading(BLOCKS.HEADING_2, 'Overview of Incomplete Underlined Items'));
  content.push(createTable(concattedContentArray));
  content.push(createParagraph(''));

  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content,
  };
};

export default transformIntoValue;
