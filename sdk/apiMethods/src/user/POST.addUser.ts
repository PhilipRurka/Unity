import crypto from 'crypto';

import type { AddUserReq, ApiMethodResponsePromise, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';
import createActivitiesAnalytics from '../utils/createActivitiesAnalytics';
import createUserLogs from '../utils/createUserLogs';
import createUserWithCredentials from '../utils/createUserWithCredentials';
import sendgridEmail from '../utils/sendgridEmail';

type CatchError = {
  message: string;
};

type AddUser = (reqData: AddUserReq) => ApiMethodResponsePromise<{ message: string }>;

const addUser: AddUser = async ({ name, email, sourceType }) => {
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
      sourceType,
    });

    await createUserLogs({ userId });

    await createActivitiesAnalytics({ userId });

    await sendgridEmail({ type: 'create account', email, password });

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default addUser;
