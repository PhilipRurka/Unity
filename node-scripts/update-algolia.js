/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import algoliasearch from 'algoliasearch';
import { Spinner } from 'cli-spinner';
import contentful from 'contentful';

const getAlgoliaIndex = async (ALGOLIA_DASHBOARD_KEY, ALGOLIA_WRITE_KEY) => {
  const client = algoliasearch(ALGOLIA_DASHBOARD_KEY, ALGOLIA_WRITE_KEY);
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

const uploadArticlesOnAlgolia = (index, algoliaRecords) => {
  index.saveObjects(algoliaRecords, { autoGenerateObjectIDIfNotExist: true });
};

const runCommands = async () => {
  const spinner = new Spinner('Please hold.. %s');
  spinner.setSpinnerString('|/-\\');

  spinner.start();
  const {
    ALGOLIA_DASHBOARD_KEY = '',
    ALGOLIA_WRITE_KEY = '',
    CONTENTFUL_SPACE_ID = '',
    CONTENTFUL_ACCESS_TOKEN = '',
  } = (await import('./env-variables.js')).default();
  const index = await getAlgoliaIndex(ALGOLIA_DASHBOARD_KEY, ALGOLIA_WRITE_KEY);
  const articles = await getByContentModel(CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN);
  const algoliaRecords = createAlgoliaRecords(articles);
  uploadArticlesOnAlgolia(index, algoliaRecords);
  spinner.stop(true);

  console.log('');
  console.log('Complete, Algolia has been updated!!!');
  console.log('');
};

runCommands();
