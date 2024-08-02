import { ObjectId } from 'mongoose';

export type UserType = {
  _id: ObjectId;
  email: string;
  password: string;
};

export type UserReqType = {
  email: string;
  password: string;
};
