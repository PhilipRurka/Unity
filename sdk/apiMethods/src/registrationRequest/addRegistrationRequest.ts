import { RegistrationRequestModel, UserModel } from '@unity/models';
import type { ApiMethodResponsePromise, ErrorGetType, RegistrationRequestReq, SuccessGetType } from '@unity/types';

import connectToDatabase from '../utils/connectToDatabase';

type CatchError = {
  message: string;
};

type AddRegistration = (params: RegistrationRequestReq) => ApiMethodResponsePromise<{ message: string }>;

const addRegistrationRequest: AddRegistration = async ({ name, email, message }) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  try {
    await connectToDatabase();
  } catch (error) {
    return [{ error: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const [hasRegistrationRequest, hasAccount] = await Promise.all([
      RegistrationRequestModel.findOne({ email }),
      UserModel.findOne({ email }),
    ]);

    if (hasRegistrationRequest || hasAccount) {
      response = [
        {
          result: {
            message: 'This email was already used to send out a request for registration or already has an account.',
          },
        },
        { status: 409 },
      ];
    } else {
      const newRegistrationRequest = new RegistrationRequestModel({
        name,
        email,
        message,
        created_at: new Date(),
        status: 'pending',
      });
      await newRegistrationRequest.save();

      response = [{ result: { message: 'Success!' } }, { status: 200 }];
    }
  } catch (err) {
    const error = err as CatchError;

    // eslint-disable-next-line no-console
    console.log(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default addRegistrationRequest;
