/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import {
  // checkIfAdminAuthenticated,
  updateAlgolia,
  updateIncomplete,
  updateInternalTools,
  updateLinkPlacement,
} from '@unity/api-methods';
import { AuditOption, AuditType } from '@unity/types';

import contentfulEnvironment from '@/Lib/contentfulEnvironment';

export const PUT = async (req: NextRequest) => {
  // const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  // if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { option }: AuditOption = await req.json();

  const environment = await contentfulEnvironment();

  let toolsToUpdate: AuditType = {};

  switch (option) {
    case 'algolia':
      toolsToUpdate = await updateAlgolia();
      break;

    case 'incomplete':
      toolsToUpdate = await updateIncomplete(environment);
      break;

    case 'link placement':
      toolsToUpdate = await updateLinkPlacement(environment);
      break;

    case 'all': {
      const algoliaObj = await updateAlgolia();
      const incompleteObj = await updateIncomplete(environment);
      const linkPlacementObj = await updateLinkPlacement(environment);

      toolsToUpdate = {
        ...algoliaObj,
        ...incompleteObj,
        ...linkPlacementObj,
      };

      break;
    }

    default:
      break;
  }

  const [data, status] = await updateInternalTools(toolsToUpdate);

  return NextResponse.json(data, status);
};
