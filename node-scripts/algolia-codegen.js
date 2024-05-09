/* eslint-disable no-console */
import { exec } from 'child_process';
import { unlink, writeFile } from 'fs/promises';

const runPrettier = (filePath) =>
  new Promise((resolve, reject) => {
    exec(`npx prettier --write "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error running Prettier:', stderr);
        reject(stderr);
      } else {
        console.log('Prettier has formatted the file:', stdout);
        resolve(stdout);
      }
    });
  });

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
    .trim(); // Trimming here for good measure

  // Construct base results, ensure no leading spaces
  const baseResults = keys
    .reduce(
      (result, key) => `${result}
    ${key}: string,`,
      ''
    )
    .trim();

  // Ensure the final object aligns all brackets and braces correctly
  const finalObject = `
  ${baseResults}
  objectID: string,
  _highlightResult: {
    ${highlightResult}
  },
  __position: number
`;

  // Construct the final type definition with correct overall indentation
  const finalOutput = `export type ArticleSearchType = {
    ${finalObject}
};`;

  try {
    await unlink('@types/algolia-codegen/ArticlesSearchType.ts');
  } catch (e) {
    // Log if needed
  }

  try {
    const filePath = '@types/algolia-codegen/ArticlesSearchType.ts';
    await writeFile(filePath, finalOutput);
    await runPrettier(filePath);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
};

export default algoliaCodegen;
