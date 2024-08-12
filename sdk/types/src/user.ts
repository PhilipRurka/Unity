import { Document } from 'mongoose';
import type { DefaultSession } from 'next-auth';

export type UserStatus = 'active' | 'pending' | 'disabled';

export type UserType = {
  email: string;
  password: string;
  name: string;
  created_at: Date;
  last_active: Date | null;
  status: UserStatus;
};

export type UserDocument = Document & UserType;

export type UserReqType = {
  email: string;
  password: string;
};

export type UserFrontendType = {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  lastActive: Date | null;
  status: UserStatus;
};

export type AddUserReq = {
  email: string;
  name: string;
};

export type EditUserReq = {
  id: string;
  name: string;
};

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
