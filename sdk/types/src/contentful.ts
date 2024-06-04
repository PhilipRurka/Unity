export type NodeData = Record<string, any>;

export type Node = {
  readonly nodeType: string;
  data: NodeData;
};
export type Block = Node & {
  nodeType: Blocks;
  content: Array<Block | Inline | Text>;
};
export type Inline = Node & {
  nodeType: Inlines;
  content: Array<Inline | Text>;
};
export type TopLevelBlock = Block & {
  nodeType: TopLevelBlocks;
};
export type Document = Node & {
  nodeType: 'document';
  content: TopLevelBlock[];
};
export type Text = Node & {
  nodeType: 'text';
  value: string;
  marks: Mark[];
};
export type Mark = {
  type: string;
};

export type TopLevelBlocks =
  | 'paragraph'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'ordered-list'
  | 'unordered-list'
  | 'hr'
  | 'blockquote'
  | 'embedded-entry-block'
  | 'embedded-asset-block'
  | 'embedded-resource-block'
  | 'table';

export type Blocks =
  | 'document'
  | 'paragraph'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'ordered-list'
  | 'unordered-list'
  | 'list-item'
  | 'hr'
  | 'blockquote'
  | 'embedded-entry-block'
  | 'embedded-asset-block'
  | 'embedded-resource-block'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'table-header-cell';

export type Inlines =
  | 'hyperlink'
  | 'entry-hyperlink'
  | 'asset-hyperlink'
  | 'resource-hyperlink'
  | 'embedded-entry-inline'
  | 'embedded-resource-inline';
