import { ApiMethodResponse, ArticleType, AuditType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import createEmbedding from './utils/createEmbedding';
import createVectorEmbeddingArray from './utils/createVectorEmbeddingArray';
import updateContentfulVectorEmbedding from './utils/updateContentfulVectorEmbedding';

type BuildMyWikiVectorIndex = () => Promise<AuditType>;

const buildMyWikiVectorIndex: BuildMyWikiVectorIndex = async () => {
  /** Get contentSection contentful data */
  const [article] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;

  if (!('result' in article)) throw new Error('Missing data results in getByModel');

  /** Loop through content sections and create final array to upload into db */
  const vectorEmbeddedArray = createVectorEmbeddingArray(article.result);

  /** Create embeddings for content sections */
  const vectorEmbedding = await createEmbedding(vectorEmbeddedArray);

  /** Delete, upload and index vectors new ContentfulVectorEmbedding collection documents */
  await updateContentfulVectorEmbedding(vectorEmbedding);

  return { last_my_wiki_update: new Date() };
};

export default buildMyWikiVectorIndex;
