import mongoose from 'mongoose';

import { RegistrationRequestModel } from '@unity/models';
import type {
  ApiMethodResponsePromise,
  ErrorGetType,
  RegistrationRequestStatusChange,
  SuccessGetType,
} from '@unity/types';

import { addUser } from '../user';
import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type UpdateRegistrationRequestStatus = (
  param: RegistrationRequestStatusChange
) => ApiMethodResponsePromise<{ message: string }>;

const updateRegistrationRequestStatus: UpdateRegistrationRequestStatus = async ({
  id: requestId,
  status,
  reasonForDecline,
}) => {
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
        reason_for_decline: reasonForDecline,
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
