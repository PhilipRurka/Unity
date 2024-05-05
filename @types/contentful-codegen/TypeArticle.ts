import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentSectionSkeleton } from "./TypeContentSection";
import type { TypeInfoboxSkeleton } from "./TypeInfobox";

export interface TypeArticleFields {
    slug: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    articleType: EntryFieldTypes.Symbol<"Character" | "Generic">;
    infobox?: EntryFieldTypes.EntryLink<TypeInfoboxSkeleton>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentSectionSkeleton>>;
    nextRecommendedPath?: EntryFieldTypes.Symbol;
    previousRecommendedPath?: EntryFieldTypes.Symbol;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeArticleSkeleton = EntrySkeletonType<TypeArticleFields, "article">;
export type TypeArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArticleSkeleton, Modifiers, Locales>;

export function isTypeArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeArticle<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'article'
}

export type TypeArticleWithoutLinkResolutionResponse = TypeArticle<"WITHOUT_LINK_RESOLUTION">;
export type TypeArticleWithoutUnresolvableLinksResponse = TypeArticle<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeArticleWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeArticle<"WITH_ALL_LOCALES", Locales>;
export type TypeArticleWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeArticle<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeArticleWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeArticle<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
