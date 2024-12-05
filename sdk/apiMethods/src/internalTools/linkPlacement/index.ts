import { ApiMethodResponse, ArticleType, TransformedToRichTextData } from '@unity/types';

import { getByContentModel } from '../../contentful';
import updateCaptainsLogEntry from '../updateCaptainsLogEntry';
import completeFinalAdjustments from './utils/completeFinalAdjustments';
import formatKeywordLinks from './utils/formatKeywordLinks';
import reStructureArticles from './utils/reStructureArticles';
import transformIntoArticleValue from './utils/transformIntoArticleValue';
import transformIntoCaptainsLogValue from './utils/transformIntoCaptainsLogValue';
import compareArticleData from './utils/updateArticleEntries';

type UpdateLinkPlacement = () => Promise<TransformedToRichTextData[]>;

const buildLinkPlacement: UpdateLinkPlacement = async () => {
  /** Get all entries from Contentful with content model type "articles" */
  const [articles] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;

  if (!('result' in articles)) throw new Error('Missing data results in getByModel');

  /** Concat content text within sections */
  const concattedContentArray = reStructureArticles(articles.result);

  /** Create list of keyword link array */
  const listOfKeywordLinks = formatKeywordLinks(articles.result);

  /** Create array of keyword checks */
  const keywordMatchChecks = completeFinalAdjustments(concattedContentArray, listOfKeywordLinks);

  /** Transform concatted values into Article uploadable values */
  const transformedArticleData = transformIntoArticleValue(keywordMatchChecks);

  /** Transform concatted values into Captain's log uploadable values */
  const transformedCaptainsLogData = transformIntoCaptainsLogValue(keywordMatchChecks);

  /** Upload keyword checks onto the Contentful's Article entry */
  const changedArticles = compareArticleData(transformedArticleData, articles.result);

  /** Upload keyword checks onto Contentful's Captain's Log entry */
  await updateCaptainsLogEntry('keywordLinksCheckOverview', transformedCaptainsLogData);

  return changedArticles;
};

export default buildLinkPlacement;
