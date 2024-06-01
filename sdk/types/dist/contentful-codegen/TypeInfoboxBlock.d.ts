import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInfoboxItemSkeleton } from "./TypeInfoboxItem";
export interface TypeInfoboxBlockFields {
    title: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInfoboxItemSkeleton>>;
}
export type TypeInfoboxBlockSkeleton = EntrySkeletonType<TypeInfoboxBlockFields, "infoboxBlock">;
export type TypeInfoboxBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInfoboxBlockSkeleton, Modifiers, Locales>;
export declare function isTypeInfoboxBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeInfoboxBlock<Modifiers, Locales>;
export type TypeInfoboxBlockWithoutLinkResolutionResponse = TypeInfoboxBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeInfoboxBlockWithoutUnresolvableLinksResponse = TypeInfoboxBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeInfoboxBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeInfoboxBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeInfoboxBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeInfoboxBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeInfoboxBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeInfoboxBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
//# sourceMappingURL=TypeInfoboxBlock.d.ts.map