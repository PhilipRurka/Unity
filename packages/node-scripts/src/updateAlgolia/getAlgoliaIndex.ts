import algoliasearch, { type SearchIndex } from 'algoliasearch';

type GetAlgoliaIndex = () => Promise<SearchIndex>;

const getAlgoliaIndex: GetAlgoliaIndex = async () => {
  const { ALGOLIA_DASHBOARD = '', ALGOLIA_WRITE_KEY = '' } = (await import('../utils/envVariables.js')).default();

  const client = algoliasearch(ALGOLIA_DASHBOARD, ALGOLIA_WRITE_KEY);
  return client.initIndex('articles');
};

export default getAlgoliaIndex;
