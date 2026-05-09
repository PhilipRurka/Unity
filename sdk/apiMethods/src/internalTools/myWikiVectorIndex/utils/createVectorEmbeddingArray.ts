import { BLOCKS, Block, Document, Inline, Text } from '@contentful/rich-text-types';

import { ContentfulVectorEmbeddingModel } from '@unity/models';
import { TypeArticleWithoutUnresolvableLinksResponse } from '@unity/types';

import { InngestType } from '../../../inngest/inngest';
import { connectToDatabase } from '../../../utils';
import createEmbedding from './createEmbedding';

type ContentSectionType = (
  articles: TypeArticleWithoutUnresolvableLinksResponse[],
  inngest: InngestType
) => Promise<void>;

const createVectorEmbeddingArray: ContentSectionType = async (articles, inngest) => {
  // const sections: Sections = [];
  const CHUNK_SIZE = 10;

  await connectToDatabase();

  const richTextToPlainText = (node: any) => {
    if ('value' in node && typeof node.value === 'string') {
      return node.value;
    }

    if (!('content' in node) || !Array.isArray(node.content)) {
      return '';
    }

    return node.content.map(richTextToPlainText).join(' ');
  };

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

  const chunks: TypeArticleWithoutUnresolvableLinksResponse[][] = [];
  for (let i = 0; i < articles.length; i += CHUNK_SIZE) {
    chunks.push(articles.slice(i, i + CHUNK_SIZE));
  }

  for (let index = 0; index < chunks.length; index += 1) {
    const chunk = chunks[index];

    await inngest.step.run(`process-embedding-chunk-${index}`, async () => {
      const sections = [];

      for (const page of chunk) {
        for (const contentSection of page.fields.content) {
          // eslint-disable-next-line no-continue
          if (!contentSection || !('sys' in contentSection)) continue;

          const { slug, tags } = page.fields;

          const {
            sys: { id: sysId, createdAt, updatedAt },
            fields: { title = '', content: rawContent },
          } = contentSection;

          const subSections = findH3s(rawContent);

          const content = richTextToPlainText(rawContent);

          sections.push({
            sysId,
            title,
            slug,
            content: `[${title}]${content}`,
            subSections,
            tags,
            createdAt: createdAt ? new Date(createdAt) : undefined,
            updatedAt: updatedAt ? new Date(updatedAt) : undefined,
          });
        }
      }

      const embeddings = await createEmbedding(sections);

      try {
        await ContentfulVectorEmbeddingModel.insertMany(embeddings, { ordered: false });
      } catch (err: any) {
        inngest.logger.error('Error updating ContentfulVectorEmbedding:', err);
        // eslint-disable-next-line no-console
        console.error('Error updating ContentfulVectorEmbedding:', err);
        throw err;
      }

      return {
        processed: sections.length,
        inserted: embeddings.length,
      };
    });

    await inngest.step.sleep(`sleep-between-create-embedding-itterations-${index}`, '1s');
  }
  await inngest.step.sleep(`sleep-after-embedding-DB-update-complete`, '1s');
};

export default createVectorEmbeddingArray;
