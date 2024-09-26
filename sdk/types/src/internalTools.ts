import type { Document as ContentfulDocument } from '@contentful/rich-text-types';
import mongoose from 'mongoose';

export type AuditType = {
  last_algolia_update?: Date;
  last_incomplete_update?: Date;
  last_link_placement_update?: Date;
  incomplete_audit?: ContentfulDocument;
  link_placement_audit?: ContentfulDocument;
};

export type AuditFrontendType = {
  lastAlgoliaUpdate?: Date;
  lastIncompleteUpdate?: Date;
  lastLinkPlacementUpdate?: Date;
  incompleteAudit?: ContentfulDocument;
  linkPlacementAudit?: ContentfulDocument;
};

export type InternalToolsDocument = mongoose.Document & AuditType;
