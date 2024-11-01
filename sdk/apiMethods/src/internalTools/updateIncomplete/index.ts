import { ApiMethodResponse, ArticleType, AuditType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import updateCaptainsLogEntry from '../updateCaptainsLogEntry';
import reStructureArticles from './utils/reStructureArticles';
import transformIntoValue from './utils/transformIntoValue';

type UpdateAlgolia = () => Promise<AuditType>;

const updateIncomplete: UpdateAlgolia = async () => {
  /** Get all entries from Contentful with content model type "articles" */
  const [articles] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;

  if (!('result' in articles)) throw new Error('Missing articles results in getByModel');

  /** Count the amount of Mark Underlines in from all sections */
  const concattedContentArray = reStructureArticles(articles.result);

  /** Transform data into richtext entry to be uploaded */
  const transformedValue = transformIntoValue(concattedContentArray);

  /** Update Captain's Log with Incomplete underlined items */
  await updateCaptainsLogEntry('incompleteUnderlinedItems', transformedValue);

  return { last_incomplete_update: new Date() };
};

export default updateIncomplete;
