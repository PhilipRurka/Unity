import algoliasearch from 'algoliasearch';

const getAlgoliaIndex = async () => {
  const { NEXT_PUBLIC_ALGOLIA_DASHBOARD = '', ALGOLIA_WRITE_KEY = '' } = (
    await import('../utils/env-variables.js')
  ).default();

  const client = algoliasearch(NEXT_PUBLIC_ALGOLIA_DASHBOARD, ALGOLIA_WRITE_KEY);
  return client.initIndex('articles');
};

export default getAlgoliaIndex;
