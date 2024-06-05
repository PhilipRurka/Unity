import algoliasearch from "algoliasearch";

const getAlgoliaIndex = async () => {
  const { ALGOLIA_DASHBOARD = "", ALGOLIA_WRITE_KEY = "" } = (await import("../utils/envVariables.js")).default();

  const client = algoliasearch(ALGOLIA_DASHBOARD, ALGOLIA_WRITE_KEY);
  return client.initIndex("articles");
};

export default getAlgoliaIndex;
