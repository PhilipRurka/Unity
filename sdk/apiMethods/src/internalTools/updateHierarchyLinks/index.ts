import { ApiMethodResponse, ArticleType, AuditType, HierarchyLayoutType } from '@unity/types';

import { getByContentModel } from '../../contentful';
import updateCaptainsLogEntry from '../updateCaptainsLogEntry';
// import updateCaptainsLogEntry from '../updateCaptainsLogEntry';
import getListOfMissingHicherarchy from './utils/getListOfMissingHicherarchy';
import transformIntoCaptainsLogValue from './utils/transformIntoCaptainsLogValue';

type UpdateHierarchyLinks = () => Promise<AuditType>;

const updateHierarchyLinks: UpdateHierarchyLinks = async () => {
  /** Get all entries from Contentful with content model type "articles" */
  const [articles] = (await getByContentModel('article')) as unknown as ApiMethodResponse<ArticleType[]>;
  const [hierarchyLayout] = (await getByContentModel('hierarchyLayout')) as unknown as ApiMethodResponse<
    HierarchyLayoutType[]
  >;

  if (!('result' in articles) || !('result' in hierarchyLayout))
    throw new Error('Missing articles results in getByModel');

  const listOfHicherarcyCheck = getListOfMissingHicherarchy(articles.result, hierarchyLayout.result);

  const transformedCaptainsLogData = transformIntoCaptainsLogValue(listOfHicherarcyCheck);

  await updateCaptainsLogEntry('hierarchyLayoutCheck', transformedCaptainsLogData);

  return { hierarchy_links: new Date() };
};

export default updateHierarchyLinks;
