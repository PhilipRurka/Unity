import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContentSectionFields {
    entryTitle: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
}

export type TypeContentSectionSkeleton = EntrySkeletonType<TypeContentSectionFields, "contentSection">;
export type TypeContentSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentSectionSkeleton, Modifiers, Locales>;

export function isTypeContentSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeContentSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'contentSection'
}

export type TypeContentSectionWithoutLinkResolutionResponse = TypeContentSection<"WITHOUT_LINK_RESOLUTION">;
export type TypeContentSectionWithoutUnresolvableLinksResponse = TypeContentSection<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeContentSectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeContentSection<"WITH_ALL_LOCALES", Locales>;
export type TypeContentSectionWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeContentSection<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeContentSectionWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeContentSection<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
