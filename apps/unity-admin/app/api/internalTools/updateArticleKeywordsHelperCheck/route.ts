/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, updateArticleKeywordsHelperCheck, updateInternalTools } from '@unity/api-methods';
import { TransformedToRichTextData } from '@unity/types';

type ReqJson = {
  article: TransformedToRichTextData;
};

export const PUT = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { article }: ReqJson = await req.json();

  const [data, status] = await updateArticleKeywordsHelperCheck(article);

  return NextResponse.json(data, status);
};

export const POST = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const [data, status] = await updateInternalTools({ last_link_placement_update: new Date() });

  return NextResponse.json(data, status);
};
