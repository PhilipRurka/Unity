import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeHierarchyLinkFields {
    entryTitle: EntryFieldTypes.Symbol;
    link: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
    childrenLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHierarchyLinkSkeleton>>;
}

export type TypeHierarchyLinkSkeleton = EntrySkeletonType<TypeHierarchyLinkFields, "hierarchyLink">;
export type TypeHierarchyLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHierarchyLinkSkeleton, Modifiers, Locales>;

export function isTypeHierarchyLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHierarchyLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hierarchyLink'
}

export type TypeHierarchyLinkWithoutLinkResolutionResponse = TypeHierarchyLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeHierarchyLinkWithoutUnresolvableLinksResponse = TypeHierarchyLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHierarchyLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHierarchyLink<"WITH_ALL_LOCALES", Locales>;
export type TypeHierarchyLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHierarchyLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHierarchyLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHierarchyLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
