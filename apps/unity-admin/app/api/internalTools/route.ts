/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import {
  checkIfAdminAuthenticated,
  updateAlgolia,
  updateIncomplete,
  updateInternalTools,
  updateLinkPlacement,
} from '@unity/api-methods';
import { AuditOption, AuditType } from '@unity/types';

export const PUT = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { option }: AuditOption = await req.json();

  let toolsToUpdate: AuditType = {};

  switch (option) {
    case 'algolia':
      toolsToUpdate = await updateAlgolia();
      break;

    case 'incomplete':
      toolsToUpdate = await updateIncomplete();
      break;

    case 'link placement':
      toolsToUpdate = await updateLinkPlacement();
      break;

    case 'all': {
      const algoliaObj = await updateAlgolia();
      const incompleteObj = await updateIncomplete();
      const linkPlacementObj = await updateLinkPlacement();

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
