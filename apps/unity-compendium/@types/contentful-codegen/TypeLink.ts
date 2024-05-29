import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLinkFields {
    title: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

export function isTypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'link'
}

export type TypeLinkWithoutLinkResolutionResponse = TypeLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeLinkWithoutUnresolvableLinksResponse = TypeLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITH_ALL_LOCALES", Locales>;
export type TypeLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
