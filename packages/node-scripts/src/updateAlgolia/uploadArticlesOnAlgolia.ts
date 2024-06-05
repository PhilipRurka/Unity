import { SearchIndex } from 'algoliasearch';

import { AlgoliaEntrie } from '@unity/types';

const uploadArticlesOnAlgolia = async (index: SearchIndex, algoliaRecords: AlgoliaEntrie[]) => {
  await index.replaceAllObjects(algoliaRecords, { autoGenerateObjectIDIfNotExist: true });
};

export default uploadArticlesOnAlgolia;
