import crypto from 'crypto';

import type { AddUserReq, ApiMethodResponseType, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '@/Lib/connectToDatabase';
import createActivitiesAnalytics from '@/Lib/createActivitiesAnalytics';
import createUserWithCredentials from '@/Lib/createUserWithCredentials';
import sendgridInvitationEmail from '@/Lib/sendgridInvitationEmail';

type CatchError = {
  message: string;
};

type UserPut = (reqData: AddUserReq) => ApiMethodResponseType<{ message: string }>;

const activityPut: UserPut = async ({ name, email }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const password = crypto.randomBytes(8).toString('hex');

    const userId = await createUserWithCredentials({
      email,
      name,
      password,
    });

    await createActivitiesAnalytics({ userId });

    await sendgridInvitationEmail({ email, password });

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default activityPut;
