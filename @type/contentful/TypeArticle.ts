import type { Entry, EntryFields } from "contentful";
import type { TypeContentSectionFields } from "./TypeContentSection";
import type { TypeInfoboxFields } from "./TypeInfobox";

export interface TypeArticleFields {
    path: EntryFields.Symbol;
    articleType: "Character" | "Generic";
    infobox?: Entry<TypeInfoboxFields>;
    content: Entry<TypeContentSectionFields>[];
    nextRecommendedPath?: EntryFields.Symbol;
    previousRecommendedPath?: EntryFields.Symbol;
    tags: EntryFields.Symbol[];
}

export type TypeArticle = Entry<TypeArticleFields>;
