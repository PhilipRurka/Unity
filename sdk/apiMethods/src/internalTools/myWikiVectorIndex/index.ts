import { ApiMethodResponse, ArticleType, AuditType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import createEmbedding from './utils/createEmbedding';
import createVectorEmbeddingArray from './utils/createVectorEmbeddingArray';
import updateContentfulVectorEmbedding from './utils/updateContentfulVectorEmbedding';

type BuildMyWikiVectorIndex = (step: any) => Promise<AuditType>;

const buildMyWikiVectorIndex: BuildMyWikiVectorIndex = async (step) => {
  /** Get contentSection contentful data */
  const [article]: ApiMethodResponse<ArticleType[]> = await step.run('fetch-contentful-data', () =>
    getByContentModel('article')
  );

  if (!('result' in article)) throw new Error('Missing data results in getByModel');

  /** Loop through content sections and create final array to upload into db */
  const vectorEmbeddedArray = await step.run('create-vector-embedding-array', () =>
    createVectorEmbeddingArray(article.result)
  );

  /** Create embeddings for content sections */
  const vectorEmbedding = await step.run('create-embedding', () => createEmbedding(vectorEmbeddedArray));

  /** Delete, upload and index vectors new ContentfulVectorEmbedding collection documents */
  await updateContentfulVectorEmbedding(vectorEmbedding, step);

  console.log('Inngest ++++++++++ Finished building MyWiki vector index');

  return { last_my_wiki_update: new Date() };
};

export default buildMyWikiVectorIndex;
