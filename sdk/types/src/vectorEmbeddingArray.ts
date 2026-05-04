export type ContentfulVectorWithoutEmbeddingType = {
  sysId: string;
  title: string;
  slug: string;
  relations?: string[];
  subSections?: string[];
  tags?: string[];
  content: string;
  updatedAt?: Date;
  createdAt?: Date;
};

export type ContentfulVectorEmbeddingType = ContentfulVectorWithoutEmbeddingType & {
  plot_embedding_text_embedding_3_large: number[];
};
