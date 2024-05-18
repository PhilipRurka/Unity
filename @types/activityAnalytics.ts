export type Activity = {
  date: Date;
  slug: string;
};

export type ActivityAnalytictsReq = {
  email: string;
  activities: Activity[];
};
