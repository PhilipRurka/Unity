import { ArticleType } from '@unity/types';

import executeStep from '../utils/executeStep.js';
import getByContentModel from '../utils/getByContentModel.js';
import completeFinalAdjustments from './completeFinalAdjustments.js';
import formatKeywordLinks from './formatKeywordLinks.js';
import reStructureArticles from './reStructureArticles.js';
import transformIntoArticleValue from './transformIntoArticleValue.js';
import transformIntoCaptainsLogValue from './transformIntoCaptainsLogValue.js';
import updateArticleEntries from './updateArticleEntries.js';
import updateCaptainsLogEntry from './updateCaptainsLogEntry.js';

const runCommands = async () => {
  const articles = (await executeStep(
    'Step 1: Get all entries from Contentful with content model type "articles"',
    () => getByContentModel('article')
  )) as ArticleType[];

  const concattedContentArray = await executeStep('Step 2: Concat content text within sections', () =>
    reStructureArticles(articles)
  );

  const listOfKeywordLinks = await executeStep('Step 3: create list of keyword link array', () =>
    formatKeywordLinks(articles)
  );

  const keywordMatchChecks = await executeStep('Step 4: Create array of keyword checks', () =>
    completeFinalAdjustments(concattedContentArray, listOfKeywordLinks)
  );

  const transformedArticleData = await executeStep(
    'Step 5: Transform concatted values into Article uploadable values',
    () => transformIntoArticleValue(keywordMatchChecks)
  );

  await executeStep("Step 6: Upload keyword checks onto the Contentful's Article entry", () =>
    updateArticleEntries(transformedArticleData)
  );

  const transformedCaptainsLogData = await executeStep(
    "Step 7: Transform concatted values into Captain's log uploadable values",
    () => transformIntoCaptainsLogValue(keywordMatchChecks)
  );

  await executeStep("Step 8: Upload keyword checks onto Contentful's Captain's Log entry", () =>
    updateCaptainsLogEntry(transformedCaptainsLogData)
  );
};

runCommands();
