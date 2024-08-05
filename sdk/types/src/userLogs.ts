import mongoose from 'mongoose';

import { UserStatus } from './user';

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

export type LogType = ActiveSessionType | StatusChangeType | InviteSentType;

export type UserLogs = {
  user_id: mongoose.Types.ObjectId;
  logs: LogType[];
};

export type UserLogsDocument = Document & UserLogs;
