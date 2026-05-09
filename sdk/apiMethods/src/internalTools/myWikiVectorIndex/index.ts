import { ApiMethodResponse, ArticleType, AuditType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import { InngestType } from '../../inngest/inngest';
// import createEmbedding from './utils/createEmbedding';
import createVectorEmbeddingArray from './utils/createVectorEmbeddingArray';
import indexVectors from './utils/indexVectors';
// import updateContentfulVectorEmbedding from './utils/updateContentfulVectorEmbedding';
import vectorWipe from './utils/vectorWipe';

type BuildMyWikiVectorIndex = (inngest: InngestType) => Promise<AuditType>;

const buildMyWikiVectorIndex: BuildMyWikiVectorIndex = async (inngest) => {
  await vectorWipe(inngest);

  /** Get contentSection contentful data */
  const [article]: ApiMethodResponse<ArticleType[]> = await inngest.step.run('fetch-contentful-data', () =>
    getByContentModel('article')
  );

  if (!('result' in article)) throw new Error('Missing data results in getByModel');

  await createVectorEmbeddingArray(article.result, inngest);

  await indexVectors(inngest);

  // await updateContentfulVectorEmbedding(vectorEmbedding, inngest);

  console.log('Inngest ++++++++++ Finished building MyWiki vector index');

  return { last_my_wiki_update: new Date() };
};

export default buildMyWikiVectorIndex;
