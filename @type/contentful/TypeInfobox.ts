import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeInfoboxBlockFields } from "./TypeInfoboxBlock";

export interface TypeInfoboxFields {
    entryTitle: EntryFields.Symbol;
    image?: Asset;
    blocks: Entry<TypeInfoboxBlockFields>[];
}

export type TypeInfobox = Entry<TypeInfoboxFields>;
