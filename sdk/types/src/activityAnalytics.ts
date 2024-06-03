export type ActivityReqType = {
  email: string;
  slug: string;
};

export type ActivityType = {
  date: Date;
  slug: string;
};

export type ActivityAnalytictsType = {
  email: string;
  activities: ActivityType[];
};
