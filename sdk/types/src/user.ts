import type { ObjectId } from 'mongoose';
import type { DefaultSession } from 'next-auth';

export type UserType = {
  _id: ObjectId;
  email: string;
  password: string;
};

export type UserReqType = {
  email: string;
  password: string;
};

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
