import executeStep from '../utils/executeStep.js';
import getByContentModel from '../utils/getByContentModel.js';
import reStructureArticles from './reStructureArticles.js';
import transformIntoValue from './transformIntoValue.js';
import updateCaptainsLogEntry from './updateCaptainsLogEntry.js';

const runCommands = async () => {
  const articles = await executeStep('Step 1: Get all entries from Contentful with content model type "articles"', () =>
    getByContentModel('article')
  );

  const concattedContentArray = await executeStep(
    'Step 2: Count the amount of Mark Underlines in from all sections',
    () => reStructureArticles(articles)
  );

  const transformedValue = await executeStep('Step 3: Transform data into richtext entry to be uploaded', () =>
    transformIntoValue(concattedContentArray)
  );

  await executeStep("Step 4: Update Captain's Log with Incomplete underlined items", () =>
    updateCaptainsLogEntry(transformedValue)
  );
};

runCommands();
