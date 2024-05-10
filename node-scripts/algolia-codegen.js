/* eslint-disable no-console */
import { unlink, writeFile } from 'fs/promises';

import runPrettier from './runPrettier.js';

const algoliaCodegen = async (algoliaObject) => {
  const keys = Object.keys(algoliaObject);

  // Create highlight results with correct indentation
  const highlightResult = keys
    .reduce(
      (result, key) => `${result}
        ${key}: {
          value: string,
          matchLevel: "none" | 'full',
          fullyHighlighted?: boolean,
          matchedWords: string[]
        },
      `,
      ''
    )
    .trim();

  const baseResults = keys
    .reduce(
      (result, key) => `${result}
    ${key}: string,`,
      ''
    )
    .trim();

  const finalObject = `
  ${baseResults}
  objectID: string,
  _highlightResult: {
    ${highlightResult}
  },
  __position: number
`;

  const finalOutput = `export type ArticleSearchType = {
    ${finalObject}
};`;

  try {
    await unlink('@types/algolia-codegen/ArticleSearchType.ts');
    // eslint-disable-next-line no-empty
  } catch (_) {}

  try {
    const filePath = '@types/algolia-codegen/ArticleSearchType.ts';
    await writeFile(filePath, finalOutput);
    await runPrettier(filePath);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
};

export default algoliaCodegen;
