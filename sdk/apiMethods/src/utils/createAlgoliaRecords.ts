import { AlgoliaEntrie, ArticleType } from '@unity/types';

const createAlgoliaRecords = (articles: ArticleType[]) => {
  const algoliaEntries: AlgoliaEntrie[] = [];

  articles.forEach((article) => {
    const { slug, title } = article.fields;

    article.fields.content.forEach((section) => {
      let sectionText = '';

      if (!section || !section.fields) return;

      section.fields.content.content.forEach((node) => {
        const isHeading =
          node.nodeType === 'heading-3' ||
          node.nodeType === 'heading-4' ||
          node.nodeType === 'heading-5' ||
          node.nodeType === 'heading-6';

        if (node.nodeType === 'paragraph' || isHeading) {
          node.content.forEach((textNode) => {
            if (textNode.nodeType === 'text') {
              let textNodeValue = textNode.value;
              const isTextNodeValueFirstComma = textNodeValue.charAt(0) === ',';
              const isTextNodeValueLastSpace = textNodeValue.charAt(textNodeValue.length - 1) === ' ';
              const isSectionTextValueLastSpace = sectionText.charAt(textNodeValue.length - 1) === ' ';

              if (!isSectionTextValueLastSpace) {
                sectionText += ' ';
              }

              if (isTextNodeValueFirstComma) {
                sectionText = sectionText.slice(0, -1);
              }

              if (isHeading) {
                textNodeValue = textNodeValue.toUpperCase();
              }

              sectionText += `${textNodeValue}${isTextNodeValueLastSpace ? '' : ' '}${isHeading ? '- ' : ''}`;
            } else if (textNode.nodeType === 'hyperlink') {
              sectionText += `${textNode.content
                .map((linkNode) => {
                  if (linkNode.nodeType !== 'text') return '';
                  return linkNode.value;
                })
                .join('')}`;
            }
          });

          sectionText = sectionText.trim().replace(/,\s*$/, '');
        }
      });

      if (sectionText) {
        algoliaEntries.push({
          slug,
          title,
          contentTitle: section?.fields.title,
          content: sectionText,
        });
      }
    });
  });

  return algoliaEntries;
};

export default createAlgoliaRecords;
