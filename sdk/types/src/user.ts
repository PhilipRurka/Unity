import mongoose, { Document } from 'mongoose';
import type { DefaultSession } from 'next-auth';

export type UserStatus = 'active' | 'pending' | 'disabled';
export type UserSourceType = 'manual' | 'request';

export type UserType = {
  email: string;
  password: string;
  name: string;
  created_at: Date;
  last_active: Date | null;
  status: UserStatus;
  source_type: UserSourceType;
};

export type UserDocument = Document & UserType;

export type UserReqType = {
  email: string;
  password: string;
};

export type UserBasicFrontendType = {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  lastActive: Date | null;
  status: UserStatus;
  sourceType: UserSourceType;
};

export type AddUserReq = {
  email: string;
  name: string;
  sourceType: UserSourceType;
};

export type EditUserReq = {
  fields: UpdatedFieldLogType['fields'];
};

export type UpdateActiveLastReq = {
  lastActive: Date;
};

export type UserFrontendType = UserBasicFrontendType & UserLogsFrontendType;

export type ActiveSessionType = {
  type: 'activeSession';
  timestamp: Date;
};

export type InviteSentType = {
  type: 'inviteSent';
  timestamp: Date;
};

export type StatusChangeType = {
  type: 'statusChange';
  from: UserStatus;
  to: UserStatus;
  reason?: string;
  timestamp: Date;
};

export type UpdatedPasswordLogType = {
  type: 'updatedPassword';
  timestamp: Date;
};

export type UpdatedFieldLogType = {
  type: 'updatedField';
  fields: Array<{
    property: 'name' | 'notes';
    from: string;
    to: string;
  }>;
  timestamp: Date;
};

export type LogType =
  | ActiveSessionType
  | StatusChangeType
  | InviteSentType
  | UpdatedPasswordLogType
  | UpdatedFieldLogType;

export type UserLogs = {
  user_id: mongoose.Types.ObjectId;
  logs: LogType[];
};

export type UserLogsFrontendType = { logs: LogType[] };

export type UserLogsDocument = Document & UserLogs;

export type UserStatusChangeReq = {
  userId: string;
  newStatus: UserStatus;
  reason: string;
};

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
