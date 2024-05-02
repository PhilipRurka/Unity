/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

// import getByContentModel from './methods/GET';

export const GET = async (req: NextRequest) => {
  const reqData = await req.json();
  console.log(reqData);
  // const [data, status] = await getByContentModel(reqData);
  const data = '';

  // return NextResponse.json(data, status);
  return NextResponse.json(data);
};
