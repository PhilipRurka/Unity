import type { Entry, EntryFields } from "contentful";

export interface TypeContentSectionFields {
    entryTitle?: EntryFields.Symbol;
    content: EntryFields.RichText;
}

export type TypeContentSection = Entry<TypeContentSectionFields>;
