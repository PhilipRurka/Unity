import { ObjectId } from 'mongoose';

export type ActivityReqType = {
  user_id: ObjectId;
  slug: string;
};

export type ActivityType = {
  date: Date;
  slug: string;
};

export type ActivityAnalytictsType = {
  user_id: ObjectId;
  activities: ActivityType[];
};
