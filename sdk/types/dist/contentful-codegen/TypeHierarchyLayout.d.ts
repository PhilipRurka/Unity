import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHierarchyLinkSkeleton } from "./TypeHierarchyLink";
export interface TypeHierarchyLayoutFields {
    entryTitle: EntryFieldTypes.Symbol;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHierarchyLinkSkeleton>>;
}
export type TypeHierarchyLayoutSkeleton = EntrySkeletonType<TypeHierarchyLayoutFields, "hierarchyLayout">;
export type TypeHierarchyLayout<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHierarchyLayoutSkeleton, Modifiers, Locales>;
export declare function isTypeHierarchyLayout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHierarchyLayout<Modifiers, Locales>;
export type TypeHierarchyLayoutWithoutLinkResolutionResponse = TypeHierarchyLayout<"WITHOUT_LINK_RESOLUTION">;
export type TypeHierarchyLayoutWithoutUnresolvableLinksResponse = TypeHierarchyLayout<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHierarchyLayoutWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHierarchyLayout<"WITH_ALL_LOCALES", Locales>;
export type TypeHierarchyLayoutWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHierarchyLayout<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHierarchyLayoutWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHierarchyLayout<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
//# sourceMappingURL=TypeHierarchyLayout.d.ts.map