/* eslint-disable no-console */
import { ArticleType } from '@unity/types';

import executeStep from '../utils/executeStep.js';
import getByContentModel from '../utils/getByContentModel.js';
import algoliaCodegen from './algoliaCodegen.js';
import createAlgoliaRecords from './createAlgoliaRecords.js';
import getAlgoliaIndex from './getAlgoliaIndex.js';
import uploadArticlesOnAlgolia from './uploadArticlesOnAlgolia.js';

const runCommands = async () => {
  console.log('');

  const algoliaIndex = await executeStep('Step 1: Get Algolia Index', () => getAlgoliaIndex());

  const articles = (await executeStep(
    'Step 2: Get all entries from Contentful with content model type "articles"',
    () => getByContentModel('article')
  )) as ArticleType[];

  const algoliaRecords = await executeStep('Step 3: Locally create Algolia records so they can be updated', () =>
    createAlgoliaRecords(articles)
  );

  await executeStep('Step 4: Update Algolia using local Algolia records', () =>
    uploadArticlesOnAlgolia(algoliaIndex, algoliaRecords)
  );

  await executeStep('Step 5: Delete & Create "@unity/types/algolia-codegen/ArticleSearchType.ts"', () =>
    algoliaCodegen(algoliaRecords[0])
  );

  console.log('');
  console.log('Complete!!!');
  console.log('');
};

runCommands();
