import type { Entry, EntryFields } from "contentful";
import type { TypeLinkFields } from "./TypeLink";

export interface TypeHierarchyLinkFields {
    entryTitle?: EntryFields.Symbol;
    link: Entry<TypeLinkFields>;
    childrenLinks?: Entry<TypeHierarchyLinkFields | TypeLinkFields>[];
}

export type TypeHierarchyLink = Entry<TypeHierarchyLinkFields>;
