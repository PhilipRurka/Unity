import { ApiMethodResponse, ArticleType, AuditType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import updateCaptainsLogEntry from '../updateCaptainsLogEntry';
import completeFinalAdjustments from './utils/completeFinalAdjustments';
import formatKeywordLinks from './utils/formatKeywordLinks';
import reStructureArticles from './utils/reStructureArticles';
import transformIntoCaptainsLogValue from './utils/transformIntoCaptainsLogValue';
import transformIntoArticleValue from './utils/transformIntoValue';
import updateArticleEntries from './utils/updateArticleEntries';

type UpdateLinkPlacement = () => Promise<AuditType>;

const updateLinkPlacement: UpdateLinkPlacement = async () => {
  /** Get all entries from Contentful with content model type "articles" */
  const [data] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;

  if (!('result' in data)) throw new Error('Missing data results in getByModel');

  /** Concat content text within sections */
  const concattedContentArray = reStructureArticles(data.result);

  /** Create list of keyword link array */
  const listOfKeywordLinks = formatKeywordLinks(data.result);

  /** Create array of keyword checks */
  const keywordMatchChecks = completeFinalAdjustments(concattedContentArray, listOfKeywordLinks);

  /** Transform concatted values into Article uploadable values */
  const transformedArticleData = transformIntoArticleValue(keywordMatchChecks);

  /** Upload keyword checks onto the Contentful's Article entry */
  await updateArticleEntries(transformedArticleData);

  /** Transform concatted values into Captain's log uploadable values */
  const transformedCaptainsLogData = transformIntoCaptainsLogValue(keywordMatchChecks);

  /** Upload keyword checks onto Contentful's Captain's Log entry */
  await updateCaptainsLogEntry('keywordLinksCheckOverview', transformedCaptainsLogData);

  return { last_link_placement_update: new Date() };
};

export default updateLinkPlacement;
