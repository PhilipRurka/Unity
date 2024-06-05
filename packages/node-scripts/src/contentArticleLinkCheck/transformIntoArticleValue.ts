import { BLOCKS, Document, TopLevelBlock } from '@contentful/rich-text-types';

import { ArticlesKeywordsCheck, TrackedKeyword, TransformedToRichTextData } from '@unity/types';

import { createHeading, createParagraph, createTableCell } from '../utils/richTextNodeCreation.js';

const createTable = (rows: TrackedKeyword[]): TopLevelBlock => {
  const sortedRows = rows.sort((a, b) => a.keyword.localeCompare(b.keyword));

  const tableContent = [
    {
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell('Keyword', true), createTableCell('Slug', true)],
    },
  ];

  sortedRows.forEach((row) => {
    tableContent.push({
      nodeType: BLOCKS.TABLE_ROW,
      data: {},
      content: [createTableCell(row.keyword), createTableCell(row.slug)],
    });
  });

  return {
    nodeType: BLOCKS.TABLE,
    data: {},
    content: tableContent,
  };
};

const transformIntoArticleValue = (keywordMatchChecks: ArticlesKeywordsCheck[]) => {
  const transformedData: TransformedToRichTextData = [];

  keywordMatchChecks.forEach((data) => {
    const { id } = data;
    const content: Document['content'] = [];

    if (data.listOfMissPlacedLinks.length === 0 && data.missingLinks.length === 0) {
      transformedData.push({
        id,
        transformedData: {
          nodeType: BLOCKS.DOCUMENT,
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
      content.push(createHeading(BLOCKS.HEADING_2, entryTitle));

      const missingLinks = data.missingLinks.filter((link) => link.entryTitle === entryTitle);
      if (missingLinks.length > 0) {
        content.push(createHeading(BLOCKS.HEADING_3, 'Missing Links'));
        content.push(createTable(missingLinks));
      }

      const missPlacedLinks = data.listOfMissPlacedLinks.filter((link) => link.entryTitle === entryTitle);
      if (missPlacedLinks.length > 0) {
        content.push(createHeading(BLOCKS.HEADING_3, 'Miss Placed Links'));
        content.push(createTable(missPlacedLinks));
      }

      content.push(createParagraph(''));
    });

    transformedData.push({
      id,
      transformedData: {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content,
      },
    });
  });

  return transformedData;
};

export default transformIntoArticleValue;
