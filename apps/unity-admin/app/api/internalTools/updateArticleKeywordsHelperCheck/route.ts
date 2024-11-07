/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, updateArticleKeywordsHelperCheck } from '@unity/api-methods';
import { TransformedToRichTextData } from '@unity/types';

type ReqJson = {
  articleData: TransformedToRichTextData;
};

export const PUT = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { articleData }: ReqJson = await req.json();

  const [data, status] = await updateArticleKeywordsHelperCheck(articleData);

  return NextResponse.json(data, status);
};
