import bcrypt from 'bcrypt';
import crypto from 'crypto';

import { UserModel } from '@unity/models';
import { ApiMethodResponsePromise, ErrorGetType, SuccessGetType } from '@unity/types';

import { sendgridEmail } from '../utils';
import connectToDatabase from '../utils/connectToDatabase';

type ResetPassword = (email: string) => ApiMethodResponsePromise<{ message: string }>;

type CatchError = {
  message: string;
};

const resetPassword: ResetPassword = async (email) => {
  let response: SuccessGetType<{ message: string }> | ErrorGetType;

  await connectToDatabase();

  const password = crypto.randomBytes(8).toString('hex');
  const hashedPassword = await bcrypt.hash(password, 10);

  await UserModel.findOneAndUpdate({ email }, { password: hashedPassword });

  await sendgridEmail({ type: 'reset password', email, password });

  try {
    response = [{ result: { message: 'Success!!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    response = [{ error: { message: error.message } }, { status: 503 }];
  }

  return response;
};

export default resetPassword;
