import mongoose, { Schema, models } from 'mongoose';

import { ContentfulVectorEmbeddingType } from '@unity/types';

const ContentfulVectorEmbeddingSchema = new Schema<ContentfulVectorEmbeddingType>(
  {
    sysId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    relations: {
      type: [String],
      required: false,
    },
    subSections: {
      type: [String],
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
    createdAt: {
      type: Date,
      required: false,
    },
    plot_embedding_text_embedding_3_large: {
      type: [Number],
      required: true,
    },
  },
  { timestamps: true }
);

// Use existing model if it exists, otherwise create new
const ContentfulVectorEmbeddingModel =
  models.contentful_vector_embeddings ||
  mongoose.model('contentful_vector_embeddings', ContentfulVectorEmbeddingSchema);

export default ContentfulVectorEmbeddingModel;
