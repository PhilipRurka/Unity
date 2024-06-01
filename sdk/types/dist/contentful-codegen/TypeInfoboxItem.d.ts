import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
export interface TypeInfoboxItemFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
}
export type TypeInfoboxItemSkeleton = EntrySkeletonType<TypeInfoboxItemFields, "infoboxItem">;
export type TypeInfoboxItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInfoboxItemSkeleton, Modifiers, Locales>;
export declare function isTypeInfoboxItem<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeInfoboxItem<Modifiers, Locales>;
export type TypeInfoboxItemWithoutLinkResolutionResponse = TypeInfoboxItem<"WITHOUT_LINK_RESOLUTION">;
export type TypeInfoboxItemWithoutUnresolvableLinksResponse = TypeInfoboxItem<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeInfoboxItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeInfoboxItem<"WITH_ALL_LOCALES", Locales>;
export type TypeInfoboxItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeInfoboxItem<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeInfoboxItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeInfoboxItem<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
//# sourceMappingURL=TypeInfoboxItem.d.ts.map