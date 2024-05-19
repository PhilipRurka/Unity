import executeStep from '../utils/executeStep.js';
import getByContentModel from '../utils/getByContentModel.js';
import completeFinalAdjustments from './completeFinalAdjustments.js';
import formatKeywordLinks from './formatKeywordLinks.js';
import reStructureArticles from './reStructureArticles.js';
import transformIntoContentfulValue from './transformIntoContentfulValue.js';
import updateContentfulEntries from './updateContentfulEntries.js';

const runCommands = async () => {
  const articles = await executeStep('Step 1: Get all entries from Contentful with content model type "articles"', () =>
    getByContentModel('article')
  );

  const concattedContentArray = await executeStep('Step 2: Concat content text within sections', () =>
    reStructureArticles(articles)
  );

  const listOfKeywordLinks = await executeStep('Step 3: create list of keyword link array', () =>
    formatKeywordLinks(articles)
  );

  const keywordMatchChecks = await executeStep('Step 4: Create array of keyword checks', () =>
    completeFinalAdjustments(concattedContentArray, listOfKeywordLinks)
  );

  const transformedData = await executeStep('Step 5: Transform concatted values into uploadable values', () =>
    transformIntoContentfulValue(keywordMatchChecks)
  );

  debugger;

  await executeStep('Step 6: Upload keyword checks onto Contentful', () => updateContentfulEntries(transformedData));
};

runCommands();
