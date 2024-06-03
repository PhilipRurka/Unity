import mongoose, { Schema, models } from 'mongoose';

import type { ActivityAnalytictsType } from '@unity/types';

const activityAnalyticsSchema = new Schema<ActivityAnalytictsType>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    activities: [
      {
        date: Date,
        slug: String,
      },
    ],
  },
  { timestamps: true }
);

const activityAnalyticsModel =
  models.activities_analytics || mongoose.model('activities_analytics', activityAnalyticsSchema);

export default activityAnalyticsModel;
