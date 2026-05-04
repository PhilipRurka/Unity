import { BLOCKS, Block, Document, Inline, Text } from '@contentful/rich-text-types';

import { ContentfulVectorWithoutEmbeddingType, TypeArticleWithoutUnresolvableLinksResponse } from '@unity/types';

type ContentSectionType = (
  data: TypeArticleWithoutUnresolvableLinksResponse[]
) => ContentfulVectorWithoutEmbeddingType[];

type Chunks = Array<{
  sysId: string;
  title: string;
  slug: string;
  relations?: string[];
  subSections?: string[];
  tags?: string[];
  content: string;
  updatedAt?: Date;
  createdAt?: Date;
}>;

const createVectorEmbeddingArray: ContentSectionType = (article) => {
  const chunks: Chunks = [];

  const richTextToPlainText = (node: any) => {
    if ('value' in node && typeof node.value === 'string') {
      return node.value;
    }

    if (!('content' in node) || !Array.isArray(node.content)) {
      return '';
    }

    return node.content.map(richTextToPlainText).join(' ');
  };

  article.forEach((page) => {
    page.fields.content.forEach((contentSection) => {
      if (!contentSection || !('sys' in contentSection)) return;

      const { slug, tags } = page.fields;
      const {
        sys: { id: sysId, createdAt, updatedAt },
        fields: { title = '', content: rawContent },
      } = contentSection;

      const findH3s = (document: Document): string[] => {
        const results: string[] = [];

        const traverse = (node: Block | Inline | Text): void => {
          if (node.nodeType === BLOCKS.HEADING_3) {
            const text = node.content.map((child) => (child.nodeType === 'text' ? child.value : '')).join('');
            results.push(text);
          }

          if ('content' in node && Array.isArray(node.content)) {
            node.content.forEach((child) => traverse(child));
          }
        };

        traverse(document);
        return results;
      };

      const subSections = findH3s(rawContent);

      const content = richTextToPlainText(rawContent);

      chunks.push({
        sysId,
        title,
        slug,
        content: `[${title}]${content}`,
        // relations,
        subSections,
        tags,
        createdAt: createdAt ? new Date(createdAt) : undefined,
        updatedAt: updatedAt ? new Date(updatedAt) : undefined,
      });
    });
  });

  return chunks;
};

export default createVectorEmbeddingArray;

// TODO: Don't pull all the contentSections, but instead the pages. Create the object with the slug and grab any of the h4's to use them as metadata tags Maybe even go as far as splitting the documents via the h4's. With the metta data, it should give enough context. Also possibly add tags, such as location, ritual, ceremony, tradition, animal, plant, food, etc BUT FIRST!!!!!!!!!!!!!!!!!!!!!! finish the application, even if it searches like shit!!!!!!!
