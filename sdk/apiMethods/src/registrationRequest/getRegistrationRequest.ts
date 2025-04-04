import mongoose from 'mongoose';

import { RegistrationRequestModel } from '@unity/models';
import { ApiMethodResponsePromise, ErrorGetType, RegistrationRequestFrontendType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type GetRegistrationRequest = (requestId: string) => ApiMethodResponsePromise<RegistrationRequestFrontendType>;

type CatchError = {
  message: string;
};

const getRegistrationRequest: GetRegistrationRequest = async (requestId) => {
  let response: SuccessGetType<RegistrationRequestFrontendType> | ErrorGetType;

  try {
    const requestObjectId = new mongoose.Types.ObjectId(requestId);

    await connectToDatabase();

    const requestData = await RegistrationRequestModel.findOne(
      { _id: requestObjectId },
      {
        _id: 0,
        id: '$_id',
        name: 1,
        email: 1,
        message: 1,
        createdAt: '$created_at',
      }
    ).exec();

    response = [{ result: requestData }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default getRegistrationRequest;
