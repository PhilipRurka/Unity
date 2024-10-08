import mongoose from 'mongoose';

export type ActivityReqType = {
  userId: string;
  slug: string;
};

export type ActivityType = {
  date: Date;
  slug: string;
};

export type ActivitiesBundleType = {
  timestamp: Date;
  activities: Array<{
    time: string;
    slug: string;
  }>;
};

export type ActivityAnalytictsType = {
  user_id: mongoose.Types.ObjectId;
  activities: ActivityType[];
};

export type ActivityAnalytictsFrontend = ActivityAnalytictsType['activities'];
