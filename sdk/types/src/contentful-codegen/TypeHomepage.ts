import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentSectionSkeleton } from "./TypeContentSection";

export interface TypeHomepageFields {
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentSectionSkeleton>>;
}

export type TypeHomepageSkeleton = EntrySkeletonType<TypeHomepageFields, "homepage">;
export type TypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomepageSkeleton, Modifiers, Locales>;

export function isTypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHomepage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'homepage'
}

export type TypeHomepageWithoutLinkResolutionResponse = TypeHomepage<"WITHOUT_LINK_RESOLUTION">;
export type TypeHomepageWithoutUnresolvableLinksResponse = TypeHomepage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHomepageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHomepage<"WITH_ALL_LOCALES", Locales>;
export type TypeHomepageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHomepage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHomepageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHomepage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
