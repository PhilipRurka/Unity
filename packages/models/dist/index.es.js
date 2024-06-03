import mongoose, { Schema, models } from 'mongoose';

const activityAnalyticsSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  activities: [
    {
      date: Date,
      slug: String
    }
  ]
}, { timestamps: true });
const activityAnalyticsModel = models.activities_analytics || mongoose.model("activities_analytics", activityAnalyticsSchema);

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });
const userModel = models.User || mongoose.model("User", userSchema);

export { activityAnalyticsModel, userModel };
//# sourceMappingURL=index.es.js.map
