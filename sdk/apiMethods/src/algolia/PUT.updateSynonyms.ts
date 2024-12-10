import algoliasearch from 'algoliasearch';

import { ApiMethodResponse, ArticleType } from '@unity/types';

import { getByContentModel } from '../contentful';

const updateSynonyms = async () => {
  const searchClient = algoliasearch(process.env.ALGOLIA_DASHBOARD || '', process.env.ALGOLIA_WRITE_KEY || '');
  const algoliaIndex = searchClient.initIndex('articles');

  const [articles] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;

  if (!('result' in articles)) throw new Error('Missing data results in getByModel');

  const synonymBundle = articles.result.map((article) => article.fields.algoliaSynonyms);

  const synonyms = synonymBundle.flat().map((item) => {
    if (!item) return undefined;

    const finalArray = item.split(' - ');

    if (finalArray.length === 1 || finalArray[0].length === 0 || finalArray[1].length === 0) return undefined;

    return finalArray;
  });

  const filteredSynonyms = synonyms.filter((item) => item) as unknown as Array<string[]>;

  try {
    const response = await algoliaIndex.saveSynonyms(
      filteredSynonyms.map((synonym) => ({
        objectID: `synonym-${synonym[0]}`,
        type: 'synonym',
        synonyms: synonym,
      })),
      { replaceExistingSynonyms: true }
    );

    console.log('Synonyms added:', response);
  } catch (error) {
    console.error('Error adding synonyms:', error);
  }
};

export default updateSynonyms;
