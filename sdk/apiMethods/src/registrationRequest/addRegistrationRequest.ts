import { RegistrationRequestModel } from '@unity/models';
import type { ApiMethodResponsePromise, ErrorGetType, RegistrationRequestType, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type AddRegistration = (params: RegistrationRequestType) => ApiMethodResponsePromise<{ message: string }>;

const addRegistrationRequest: AddRegistration = async ({ name, email, message }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const newRegistrationRequest = new RegistrationRequestModel({ name, email, message });
    await newRegistrationRequest.save();

    response = [{ result: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default addRegistrationRequest;
