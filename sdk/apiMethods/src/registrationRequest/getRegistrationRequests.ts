import { Document } from 'mongodb';

import { RegistrationRequestModel } from '@unity/models';
import { ApiMethodResponsePromise, ErrorGetType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type GetRegistrationRequestType = () => ApiMethodResponsePromise<unknown>;

type CatchError = {
  message: string;
};

const getRegistrationRequests: GetRegistrationRequestType = async () => {
  let response: SuccessGetType<Document[]> | ErrorGetType;

  try {
    await connectToDatabase();

    const requests = await RegistrationRequestModel.find(
      {},
      {
        _id: 0,
        id: '$_id',
        name: 1,
        email: 1,
        message: 1,
        createdAt: 1,
        status: 1,
      }
    ).exec();

    response = [{ result: requests }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getRegistrationRequests;
