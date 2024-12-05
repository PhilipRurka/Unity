import { BLOCKS, Document, TopLevelBlock } from '@contentful/rich-text-types';

import { HierarchyLink, ListOfHicherarcyCheck } from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../../../utils';

const createSimpleTable = (rows: string[]): TopLevelBlock => {
  const sortedRows = rows.sort((a, b) => a.localeCompare(b));

  const tableContent = [
    {
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell('Slug', true)],
    },
  ];

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell(row)],
    });
  });

  return {
    nodeType: BLOCKS.TABLE,
    data: {},
    content: tableContent,
  };
};

const createComplexTable = (rows: HierarchyLink[]): TopLevelBlock => {
  const sortedRows = rows.sort((a, b) => a.slug.localeCompare(b.slug));

  const tableContent = [
    {
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell('Title', true), createTableCell('Slug', true)],
    },
  ];

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell(row.title), createTableCell(row.slug)],
    });
  });

  return {
    nodeType: BLOCKS.TABLE,
    data: {},
    content: tableContent,
  };
};

const createTableContainer = (title: string, data: string[] | HierarchyLink[]) => {
  const content: Document['content'] = [];
  content.push(createHeading(BLOCKS.HEADING_3, title));

  if (typeof data[0] === 'string') {
    content.push(createSimpleTable(data as string[]));
    return content;
  }

  content.push(createComplexTable(data as HierarchyLink[]));
  return content;
};

const transformIntoArticleValue = (hierarchyLinks: ListOfHicherarcyCheck): Document => {
  let content: Document['content'] = [];

  if (
    hierarchyLinks.hierarchyDuplicates.length === 0 &&
    hierarchyLinks.invalidLinks.length === 0 &&
    hierarchyLinks.missingLinks.length === 0
  ) {
    return {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [],
    };
  }

  if (hierarchyLinks.missingLinks.length > 0) {
    const missingLinksTable = createTableContainer('Missing Hierarchy Links', hierarchyLinks.missingLinks);
    content = content.concat(missingLinksTable);
  }

  if (hierarchyLinks.invalidLinks.length > 0) {
    const invalidLinkTable = createTableContainer('Invalid Hierarchy Links', hierarchyLinks.invalidLinks);
    content = content.concat(invalidLinkTable);
  }

  if (hierarchyLinks.hierarchyDuplicates.length > 0) {
    const duplicateLinksTable = createTableContainer('Duplicate Hierarchy Links', hierarchyLinks.hierarchyDuplicates);
    content = content.concat(duplicateLinksTable);
  }

  content = content.concat(createParagraph(''));

  return { nodeType: BLOCKS.DOCUMENT, data: {}, content };
};

export default transformIntoArticleValue;
