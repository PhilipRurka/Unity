import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTextFields {
    id: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.Symbol;
}

export type TypeTextSkeleton = EntrySkeletonType<TypeTextFields, "text">;
export type TypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTextSkeleton, Modifiers, Locales>;

export function isTypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'text'
}

export type TypeTextWithoutLinkResolutionResponse = TypeText<"WITHOUT_LINK_RESOLUTION">;
export type TypeTextWithoutUnresolvableLinksResponse = TypeText<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTextWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeText<"WITH_ALL_LOCALES", Locales>;
export type TypeTextWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeText<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTextWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeText<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
