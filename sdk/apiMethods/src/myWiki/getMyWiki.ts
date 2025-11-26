import mongoose from 'mongoose';

import { MyWikiChatMessagesModel } from '@unity/models';
import { ApiMethodResponsePromise, CatchError, ErrorGetType, MyWikiResponseType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type GetMyWiki = (userId: string) => ApiMethodResponsePromise<MyWikiResponseType>;

const getMyWiki: GetMyWiki = async (userId) => {
  let response: SuccessGetType<MyWikiResponseType> | ErrorGetType;

  try {
    await connectToDatabase();

    const userObjectId = new mongoose.Types.ObjectId(userId);

    const rawData: any = await MyWikiChatMessagesModel.findOne({ userId: userObjectId }).lean();

    const formattedResult: MyWikiResponseType = {
      messages: rawData.messages || [],
      createdAt: rawData?.createdAt,
    };

    response = [{ result: formattedResult }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getMyWiki;
