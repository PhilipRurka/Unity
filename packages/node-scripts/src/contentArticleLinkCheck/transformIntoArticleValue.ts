import {
  ArticlesKeywordsCheck,
  Block,
  Blocks,
  TopLevelBlock,
  TrackedKeyword,
  TransformedToRichTextData,
} from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../utils/richTextNodeCreation.js';

const createTable = (rows: TrackedKeyword[]) => {
  const sortedRows = rows.sort((a, b) => a.keyword.localeCompare(b.keyword));

  const tableContent: Block[] = [
    {
      nodeType: 'table-row' as Blocks,
      data: {},
      content: [createTableCell('Keyword', true) as Block, createTableCell('Slug', true) as Block],
    },
  ];

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: 'table-row' as Blocks,
      data: {},
      content: [createTableCell(row.keyword) as Block, createTableCell(row.slug) as Block],
    });
  });

  return {
    nodeType: 'table' as Blocks,
    data: {},
    content: tableContent,
  };
};

const transformIntoArticleValue = (keywordMatchChecks: ArticlesKeywordsCheck[]) => {
  const transformedData: TransformedToRichTextData = [];

  keywordMatchChecks.forEach((data) => {
    const { id } = data;
    const content: TopLevelBlock[] = [];

    if (data.listOfMissPlacedLinks.length === 0 && data.missingLinks.length === 0) {
      transformedData.push({
        id,
        transformedData: {
          nodeType: 'document',
          data: {},
          content: [],
        },
      });
      return;
    }

    const entryTitles = [
      ...new Set(
        data.missingLinks
          .map((link) => link.entryTitle)
          .concat(data.listOfMissPlacedLinks.map((link) => link.entryTitle))
      ),
    ];

    entryTitles.forEach((entryTitle) => {
      content.push(createHeading(2, entryTitle) as TopLevelBlock);

      const missingLinks = data.missingLinks.filter((link) => link.entryTitle === entryTitle);
      if (missingLinks.length > 0) {
        content.push(createHeading(3, 'Missing Links') as TopLevelBlock);
        content.push(createTable(missingLinks) as TopLevelBlock);
      }

      const missPlacedLinks = data.listOfMissPlacedLinks.filter((link) => link.entryTitle === entryTitle);
      if (missPlacedLinks.length > 0) {
        content.push(createHeading(3, 'Miss Placed Links') as TopLevelBlock);
        content.push(createTable(missPlacedLinks) as TopLevelBlock);
      }

      content.push(createParagraph('') as TopLevelBlock);
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

export default transformIntoArticleValue;
