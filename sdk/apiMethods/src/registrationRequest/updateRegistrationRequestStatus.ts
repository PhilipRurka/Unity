import mongoose from 'mongoose';

import { RegistrationRequestModel } from '@unity/models';
import type { ApiMethodResponsePromise, ErrorGetType, RegistrationRequestStatus, SuccessGetType } from '@unity/types';

import { addUser } from '../user';
import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type UpdateRegistrationRequestStatus = (
  requestId: string,
  reqData: { status: RegistrationRequestStatus }
) => ApiMethodResponsePromise<{ message: string }>;

const updateRegistrationRequestStatus: UpdateRegistrationRequestStatus = async (requestId, { status }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(requestId);

    const registrationRequest = await RegistrationRequestModel.findOneAndUpdate(
      { _id: userObjectId },
      {
        status,
      }
    );

    if (status === 'accepted') {
      await addUser({
        email: registrationRequest?.email,
        name: registrationRequest?.name,
        sourceType: 'request',
      });
    }

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default updateRegistrationRequestStatus;
