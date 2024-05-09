/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import algoliasearch from 'algoliasearch';
import contentful from 'contentful';

import algoliaCodegen from './algolia-codegen.js';
import executeStep from './executeStep.js';

const getAlgoliaIndex = async (NEXT_PUBLIC_ALGOLIA_DASHBOARD, ALGOLIA_WRITE_KEY) => {
  const client = algoliasearch(NEXT_PUBLIC_ALGOLIA_DASHBOARD, ALGOLIA_WRITE_KEY);
  return client.initIndex('articles');
};

const getByContentModel = async (CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN) => {
  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID || '',
    accessToken: CONTENTFUL_ACCESS_TOKEN || '',
  });

  const { items } = await client.getEntries({
    content_type: 'article',
    include: 10,
  });

  return items;
};

const createAlgoliaRecords = (articles) => {
  const algoliaEntries = [];

  articles.forEach((article) => {
    const { slug, title } = article.fields;

    article.fields.content.forEach((section) => {
      let sectionText = '';

      section.fields.content.content.forEach((node) => {
        if (node.nodeType === 'paragraph' || node.nodeType === 'heading-2') {
          node.content.forEach((textNode) => {
            if (textNode.nodeType === 'text') {
              sectionText += `${textNode.value} `;
            } else if (textNode.nodeType === 'hyperlink') {
              sectionText += `${textNode.content.map((linkNode) => linkNode.value).join('')}, `;
            }
          });

          sectionText = sectionText.trim().replace(/,\s*$/, '');
        }
      });

      if (sectionText) {
        algoliaEntries.push({
          slug,
          title,
          content: sectionText,
        });
      }
    });
  });

  return algoliaEntries;
};

const uploadArticlesOnAlgolia = async (index, algoliaRecords) => {
  await index.saveObjects(algoliaRecords, { autoGenerateObjectIDIfNotExist: true });
  return undefined;
};

const runCommands = async () => {
  const {
    NEXT_PUBLIC_ALGOLIA_DASHBOARD = '',
    ALGOLIA_WRITE_KEY = '',
    CONTENTFUL_SPACE_ID = '',
    CONTENTFUL_ACCESS_TOKEN = '',
  } = (await import('./env-variables.js')).default();

  console.log('');

  const algoliaIndex = await executeStep('Step 1: Get Algolia Index', () =>
    getAlgoliaIndex(NEXT_PUBLIC_ALGOLIA_DASHBOARD, ALGOLIA_WRITE_KEY)
  );
  const articles = await executeStep('Step 2: Get all entries from Contentful with content model type "articles"', () =>
    getByContentModel(CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN)
  );

  const algoliaRecords = await executeStep('Step 3: Locally create Algolia records so they can be updated', () =>
    createAlgoliaRecords(articles)
  );

  await executeStep('Step 4: Update Algolia using local Algolia records', () =>
    uploadArticlesOnAlgolia(algoliaIndex, algoliaRecords)
  );

  await executeStep('Step 5: Delete & Create "@types/algolia-codegen/ArticlesSearchType.ts"', () =>
    algoliaCodegen(algoliaRecords[0])
  );

  console.log('');
  console.log('Complete!!!');
  console.log('');
};

runCommands();
