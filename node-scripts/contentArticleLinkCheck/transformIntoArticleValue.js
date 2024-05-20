import { createHeading, createParagraph, createTableCell } from '../utils/richTextNodeCreation.js';

const createTable = (rows) => {
  const sortedRows = rows.sort((a, b) => a.keyword.localeCompare(b.keyword));

  const tableContent = [
    {
      nodeType: 'table-row',
      data: {},
      content: [createTableCell('Keyword', true), createTableCell('Slug', true)],
    },
  ];

  sortedRows.forEach((row) => {
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

const transformIntoArticleValue = (keywordMatchChecks) => {
  const transformedData = [];

  keywordMatchChecks.forEach((data) => {
    const { id } = data;

    if (data.listOfMissPlacedLinks.length === 0 && data.missingLinks.length === 0) return;

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

      content.push(createParagraph(''));
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
