import { Document } from './contentful';

export type FinalItems = Array<{
  entryTitle: string;
  content: string;
}>;

export type ReStructureForArticleLinkCheck = Array<{
  id: string;
  slug: string;
  keywordLinks: string[] | undefined;
  sections: FinalItems;
}>;

export type ArticlesKeywordsCheck = {
  id: string;
  slug: string;
  listOfTrackedKeywords: string[];
  listOfMissPlacedLinks: TrackedKeyword[];
  missingLinks: TrackedKeyword[];
};

export type TrackedKeyword = {
  entryTitle: string;
  keyword: string;
  slug: string;
};

export type ListOfKeywordLinks = Array<{
  slug: string;
  keywords: string[];
}>;

export type TransformedToRichTextData = Array<{
  id: string;
  transformedData: Document;
}>;

export type AlgoliaEntrie = {
  slug: string;
  title: string;
  contentTitle: string | undefined;
  content: string;
};

export type ReStructureForCaptainsLogLinkCheck = {
  id: string;
  slug: string;
  markUnderlineCount: number;
};
