import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCaptainsLogFields {
    entryTitle: EntryFieldTypes.Symbol;
    notes?: EntryFieldTypes.RichText;
    incompleteUnderlinedItems?: EntryFieldTypes.RichText;
    keywordLinksCheckOverview?: EntryFieldTypes.RichText;
    hierarchyLayoutCheck?: EntryFieldTypes.RichText;
}

export type TypeCaptainsLogSkeleton = EntrySkeletonType<TypeCaptainsLogFields, "captainsLog">;
export type TypeCaptainsLog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCaptainsLogSkeleton, Modifiers, Locales>;

export function isTypeCaptainsLog<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCaptainsLog<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'captainsLog'
}

export type TypeCaptainsLogWithoutLinkResolutionResponse = TypeCaptainsLog<"WITHOUT_LINK_RESOLUTION">;
export type TypeCaptainsLogWithoutUnresolvableLinksResponse = TypeCaptainsLog<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCaptainsLogWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCaptainsLog<"WITH_ALL_LOCALES", Locales>;
export type TypeCaptainsLogWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCaptainsLog<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCaptainsLogWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCaptainsLog<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
