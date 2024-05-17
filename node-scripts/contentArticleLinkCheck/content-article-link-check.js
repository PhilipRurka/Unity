/**
 * Initiate a list of keywords
 *
 * Step 1: Create the following arrays
 *  [
 *    {
 *      slug: Slug Of Article,
 *      missingLinks: [
 *        {
 *          title: Section Title,
 *          keywords: ['']
 *        }
 *      ],
 *      listOfTrackedKeyWords: ['']
 *      sections: [
 *        {
 *          title: Section Title,
 *          content: Concatenated content with <></> between the links
 *        }
 *      ]
 *    }
 *  ]
 *
 * Step 2: Loop through each 1st level array, then the second to locate the first matching key words within the content property. When one is found, check to see if it is wrapped in a <></>.
 *    If its not, if the keyword is not already in the listOfTrackedKeyWords, add the keyword to the missingLinks and add it to the listOfTrackedKeyWords
 *    If it is, add it to the listOfTrackedKeyWords if its not already there.
 *
 *
 *
 * There will need to be a check to see if any linked keywords are not the first encounter.
 */
import executeStep from '../utils/executeStep.js';
import getByContentModel from '../utils/getByContentModel.js';
import completeFinalAdjustments from './completeFinalAdjustments.js';
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

  const keywordMatchChecks = await executeStep('Step 3: Create array of keyword checks', () =>
    completeFinalAdjustments(concattedContentArray)
  );

  const transformedData = await executeStep('Step 4: Transform concatted values into uploadable values', () =>
    transformIntoContentfulValue(keywordMatchChecks)
  );

  await executeStep('Step 5: Upload keyword checks onto Contentful', () => updateContentfulEntries(transformedData));
};

runCommands();

// const test = {
//   slug: 'silencers',
//   listOfMissPlacedLinks: [
//     {
//       slug: 'unity-race',
//       keyword: 'unity',
//       entryTitle: 'Silencers - Intro',
//     },
//   ],
//   missingLinks: [
//     {
//       slug: 'unity-race',
//       keyword: 'unity',
//       entryTitle: 'Silencers - Intro',
//     },
//     {
//       slug: 'gwanos-hemp',
//       keyword: 'gwanos hemp',
//       entryTitle: 'Silencers - Intro',
//     },
//     {
//       slug: 'purrta',
//       keyword: 'purrta',
//       entryTitle: 'Silencers - Myth',
//     },
//   ],
// };
