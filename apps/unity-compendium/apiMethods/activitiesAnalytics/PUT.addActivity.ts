import mongoose from 'mongoose';

import { ActivityAnalyticsModel } from '@unity/models';
import type { ActivityReqType, ApiMethodResponseType, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';

import getUser from '../user/GET.getUser';
import editUser from '../user/PUT.editUser';
import putUserLogs from '../user/PUT.updateUserLogs';

type CatchError = {
  message: string;
};

type ActivityPut = (reqData: ActivityReqType) => ApiMethodResponseType<{ message: string }>;

const activityPut: ActivityPut = async ({ userId, slug }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const newDate = new Date();

    const result = await ActivityAnalyticsModel.findOneAndUpdate(
      { user_id: userObjectId },
      {
        $push: {
          activities: {
            slug,
            date: newDate,
          },
        },
      }
    );

    const [userData] = await getUser(userId);

    if ('result' in userData && userData.result.lastActive) {
      const oneDayInMili = 24 * 60 * 60 * 1000;
      const lastActivePlus24h = new Date(userData.result.lastActive.getTime() + oneDayInMili);

      if (newDate >= lastActivePlus24h) {
        putUserLogs(userId);
      }
    } else {
      putUserLogs(userId);
    }

    await editUser(userId, { lastActive: newDate });

    if (!result) {
      response = [{ error: { message: 'Failed to update activities!' } }, { status: 503 }];
    }

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default activityPut;
