/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import {
  buildLinkPlacement,
  checkIfAdminAuthenticated,
  updateAlgolia,
  updateIncomplete,
  updateInternalTools,
} from '@unity/api-methods';
import { AuditOption, AuditType, TransformedToRichTextData } from '@unity/types';

export const PUT = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { option }: AuditOption = await req.json();

  let toolsToUpdate: AuditType = {};
  let builtlinkPlacement: TransformedToRichTextData[] = [];

  switch (option) {
    case 'algolia':
      toolsToUpdate = await updateAlgolia();
      break;

    case 'incomplete':
      toolsToUpdate = await updateIncomplete();
      break;

    case 'link placement':
      builtlinkPlacement = await buildLinkPlacement();
      break;

    case 'all': {
      const algoliaObj = await updateAlgolia();
      const incompleteObj = await updateIncomplete();
      builtlinkPlacement = await buildLinkPlacement();

      toolsToUpdate = {
        ...algoliaObj,
        ...incompleteObj,
      };

      break;
    }

    default:
      break;
  }

  const [data, status] = await updateInternalTools(toolsToUpdate);

  debugger;

  if (builtlinkPlacement.length === 0) return NextResponse.json(data, status);

  debugger;

  return NextResponse.json({ result: builtlinkPlacement }, status);
};
