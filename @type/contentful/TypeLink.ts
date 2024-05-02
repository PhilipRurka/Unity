import type { Entry, EntryFields } from "contentful";

export interface TypeLinkFields {
    title: EntryFields.Symbol;
    subtitle?: EntryFields.Symbol;
    path: EntryFields.Symbol;
}

export type TypeLink = Entry<TypeLinkFields>;
