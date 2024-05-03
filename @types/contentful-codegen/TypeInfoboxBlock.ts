import type { Entry, EntryFields } from "contentful";
import type { TypeInfoboxItemFields } from "./TypeInfoboxItem";

export interface TypeInfoboxBlockFields {
    title: EntryFields.Symbol;
    items: Entry<TypeInfoboxItemFields>[];
}

export type TypeInfoboxBlock = Entry<TypeInfoboxBlockFields>;
