import type { Entry, EntryFields } from "contentful";
import type { TypeHierarchyLinkFields } from "./TypeHierarchyLink";
import type { TypeLinkFields } from "./TypeLink";

export interface TypeHierarchyLayoutFields {
    entryTitle?: EntryFields.Symbol;
    links: Entry<TypeHierarchyLinkFields | TypeLinkFields>[];
}

export type TypeHierarchyLayout = Entry<TypeHierarchyLayoutFields>;
