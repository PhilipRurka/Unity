import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeInfoboxBlockSkeleton } from "./TypeInfoboxBlock";
export interface TypeInfoboxFields {
    entryTitle: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    blocks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInfoboxBlockSkeleton>>;
}
export type TypeInfoboxSkeleton = EntrySkeletonType<TypeInfoboxFields, "infobox">;
export type TypeInfobox<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInfoboxSkeleton, Modifiers, Locales>;
export declare function isTypeInfobox<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeInfobox<Modifiers, Locales>;
export type TypeInfoboxWithoutLinkResolutionResponse = TypeInfobox<"WITHOUT_LINK_RESOLUTION">;
export type TypeInfoboxWithoutUnresolvableLinksResponse = TypeInfobox<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeInfoboxWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeInfobox<"WITH_ALL_LOCALES", Locales>;
export type TypeInfoboxWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeInfobox<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeInfoboxWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeInfobox<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
//# sourceMappingURL=TypeInfobox.d.ts.map