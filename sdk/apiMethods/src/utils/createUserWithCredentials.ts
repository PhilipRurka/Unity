import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { UserModel } from '@unity/models';

type CreateUserWithCredentials = (params: {
  email: string;
  password: string;
  name: string;
}) => Promise<mongoose.Types.ObjectId>;

const createUserWithCredentials: CreateUserWithCredentials = async ({ email, password, name }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw Error('Not a valid email. According to Mr. Regex!');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      email: email.toLowerCase(),
      name,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // eslint-disable-next-line no-underscore-dangle
    return savedUser._id;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`User not created in the database: ${error.message}`);
    } else {
      throw new Error('User not created in the database');
    }
  }
};

export default createUserWithCredentials;
