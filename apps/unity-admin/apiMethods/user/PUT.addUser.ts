import crypto from 'crypto';
import { Db, MongoClient } from 'mongodb';

import type { AddUserReq, ApiMethodResponseType, ErrorGetType, SuccessGetType } from '@unity/types';

import createActivitiesAnalytics from '@/Lib/createActivitiesAnalytics';
import createUserWithCredentials from '@/Lib/createUserWithCredentials';
import mongoConnect from '@/Lib/mongoConnect';
import sendgridInvitationEmail from '@/Lib/sendgridInvitationEmail';

type CatchError = {
  message: string;
};

type UserPut = (reqData: AddUserReq) => ApiMethodResponseType<{ message: string }>;

const activityPut: UserPut = async ({ name, email }) => {
  let client: MongoClient | undefined;
  let db: Db;
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await mongoConnect();
    client = new MongoClient(process.env.MONGODB_URI || '');
    await client.connect();
    db = client.db('Production');
  } catch (error) {
    if (client) await client.close();
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const password = crypto.randomBytes(8).toString('hex');

    const userId = await createUserWithCredentials({
      db,
      email,
      name,
      password,
    });

    await createActivitiesAnalytics({ db, userId });

    await sendgridInvitationEmail({ email, password });

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    response = [{ error: { message: error.message } }, { status: 503 }];
  } finally {
    await client.close();
  }

  return response;
};

export default activityPut;
