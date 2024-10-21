import { ApiMethodResponse, ArticleType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import updateCaptainsLogEntry from '../updateCaptainsLogEntry';
import reStructureArticles from './utils/reStructureArticles';
import transformIntoValue from './utils/transformIntoValue';

type UpdateAlgolia = () => Promise<void>;

const updateIncomplete: UpdateAlgolia = async () => {
  /** Get all entries from Contentful with content model type "articles" */
  const [data] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;

  if (!('result' in data)) throw new Error('Missing data results in getByModel');

  /** Count the amount of Mark Underlines in from all sections */
  const concattedContentArray = reStructureArticles(data.result);

  /** Transform data into richtext entry to be uploaded */
  const transformedValue = transformIntoValue(concattedContentArray);

  /** Update Captain's Log with Incomplete underlined items */
  await updateCaptainsLogEntry('incompleteUnderlinedItems', transformedValue);
};

export default updateIncomplete;
