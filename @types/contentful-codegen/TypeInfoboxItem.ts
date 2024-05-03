import type { Entry, EntryFields } from "contentful";

export interface TypeInfoboxItemFields {
    title: EntryFields.Symbol;
    description: EntryFields.Text;
}

export type TypeInfoboxItem = Entry<TypeInfoboxItemFields>;
