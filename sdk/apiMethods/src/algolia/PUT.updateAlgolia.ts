import algoliasearch from 'algoliasearch';

import { ArticleType, AuditType } from '@unity/types';

import { getByContentModel } from '../contentful';
import createAlgoliaRecords from '../utils/createAlgoliaRecords';

type UpdateAlgolia = () => Promise<AuditType>;

const updateAlgolia: UpdateAlgolia = async () => {
  const searchClient = algoliasearch(process.env.ALGOLIA_DASHBOARD || '', process.env.ALGOLIA_WRITE_KEY || '');
  const algoliaIndex = searchClient.initIndex('articles');

  const [articles] = await getByContentModel('article');

  if (!('result' in articles)) {
    throw new Error("Error with await getByContentModel('article')");
  }

  const algoliaRecords = createAlgoliaRecords(articles.result as ArticleType[]);

  await algoliaIndex.replaceAllObjects(algoliaRecords, { autoGenerateObjectIDIfNotExist: true });

  return { last_algolia_update: new Date() };
};

export default updateAlgolia;
