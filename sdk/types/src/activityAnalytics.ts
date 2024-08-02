export type ActivityReqType = {
  user_id: string;
  slug: string;
};

export type ActivityType = {
  date: Date;
  slug: string;
};

export type ActivityAnalytictsType = {
  user_id: string;
  activities: ActivityType[];
};
