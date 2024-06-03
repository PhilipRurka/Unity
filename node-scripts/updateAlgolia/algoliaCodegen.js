/* eslint-disable no-console */
import runPrettier from "../utils/runPrettier.js";
import { unlink, writeFile } from "fs/promises";

export const algoliaCodegen = async (algoliaObject) => {
  const keys = Object.keys(algoliaObject);

  const highlightResult = keys
    .reduce(
      (result, key) => `${result}
        ${key}: {
          value: string;
          matchLevel: "none" | 'full';
          fullyHighlighted?: boolean;
          matchedWords: string[];
        },
      `,
      ""
    )
    .trim();

  const snippetResult = `
    content: {
      mathLevel:  "none" | 'full',
      value: string;
    }
  `;

  const baseResults = keys
    .reduce(
      (result, key) => `${result}
    ${key}: string;`,
      ""
    )
    .trim();

  const finalObject = `
  ${baseResults}
  objectID: string;
  _highlightResult: {
    ${highlightResult}
  },
  _snippetResult?: {
    ${snippetResult}
  }
  __position: number
`;

  const finalOutput = `export type ArticleSearchType = {
    ${finalObject}
  };`;

  const filePath = "./sdk/types/src/algolia-codegen/ArticleSearchType.ts";

  try {
    await unlink(filePath);
    // eslint-disable-next-line no-empty
  } catch (_) {}

  try {
    await writeFile(filePath, finalOutput);
    await runPrettier(filePath);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
};

export default algoliaCodegen;
