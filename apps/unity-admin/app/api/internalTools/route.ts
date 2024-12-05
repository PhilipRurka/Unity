/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import {
  buildLinkPlacement,
  checkIfAdminAuthenticated,
  updateAlgolia,
  updateHierarchyLinks,
  updateIncomplete,
  updateInternalTools,
  updateSynonyms,
} from '@unity/api-methods';
import { AuditOption, AuditType, TransformedToRichTextData } from '@unity/types';

type ReqType = AuditOption;

export const PUT = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { option }: ReqType = await req.json();

  let toolsToUpdate: AuditType = {};
  let builtlinkPlacement: TransformedToRichTextData[] = [];

  switch (option) {
    case 'algolia':
      toolsToUpdate = await updateAlgolia();
      await updateSynonyms();
      break;

    case 'incomplete':
      toolsToUpdate = await updateIncomplete();
      break;

    case 'link placement':
      builtlinkPlacement = await buildLinkPlacement();
      break;

    case 'hierarchy links':
      toolsToUpdate = await updateHierarchyLinks();
      break;

    case 'all': {
      const algoliaObj = await updateAlgolia();
      const incompleteObj = await updateIncomplete();
      const hierarchyObj = await updateHierarchyLinks();
      builtlinkPlacement = await buildLinkPlacement();

      await updateSynonyms();

      toolsToUpdate = {
        ...algoliaObj,
        ...incompleteObj,
        ...hierarchyObj,
      };

      break;
    }

    default:
      break;
  }

  const [data, status] = await updateInternalTools(toolsToUpdate);

  if (builtlinkPlacement.length === 0) return NextResponse.json(data, status);

  return NextResponse.json({ result: builtlinkPlacement }, status);
};
