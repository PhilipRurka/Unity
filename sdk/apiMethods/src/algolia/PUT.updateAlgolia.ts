import algoliasearch from 'algoliasearch';

import { ApiMethodResponseType, ArticleType } from '@unity/types';

import { getByContentModel } from '../contentful';
import { updateInternalTools } from '../internalTools';
import createAlgoliaRecords from '../utils/createAlgoliaRecords';

type UpdateAlgolia = () => ApiMethodResponseType<{ message: string }>;

const updateAlgolia: UpdateAlgolia = async () => {
  const searchClient = algoliasearch(process.env.ALGOLIA_DASHBOARD || '', process.env.ALGOLIA_WRITE_KEY || '');
  const algoliaIndex = searchClient.initIndex('articles');

  const [articles] = await getByContentModel('article');

  if (!('result' in articles)) {
    throw new Error("Error with await getByContentModel('article')");
  }

  const algoliaRecords = createAlgoliaRecords(articles.result as ArticleType[]);

  await algoliaIndex.replaceAllObjects(algoliaRecords, { autoGenerateObjectIDIfNotExist: true });

  updateInternalTools({ lastAlgoliaUpdate: new Date() });

  return [{ result: { message: 'Success' } }, { status: 200 }];
};

export default updateAlgolia;
