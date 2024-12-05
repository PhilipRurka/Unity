import mongoose, { Schema, models } from 'mongoose';

import type { InternalToolsDocument } from '@unity/types';

const InternalToolsSchema = new Schema<InternalToolsDocument>(
  {
    last_algolia_update: { type: Date },
    last_incomplete_update: { type: Date },
    last_link_placement_update: { type: Date },
    hierarchy_links: { type: Date },
  },
  { timestamps: true }
);

const InternalToolsModel =
  models.internal_tools || mongoose.model<InternalToolsDocument>('internal_tools', InternalToolsSchema);

export default InternalToolsModel;
