import { ArticleType, FinalItems, ReStructureForArticleLinkCheck } from '@unity/types';

const reStructureArticles = (articles: ArticleType[]) => {
  const finalArray: ReStructureForArticleLinkCheck = [];

  articles.forEach((article) => {
    const { slug, keywordLinks } = article.fields;
    const { id } = article.sys;
    const items: FinalItems = [];

    const getNodeText = (node: any): string => {
      if (!node) return '';

      if (node.nodeType === 'text') {
        const isUnderlined = node.marks?.some((mark: any) => mark.type === 'underline');

        if (isUnderlined) return '';

        return node.value;
      }

      if (node.nodeType === 'hyperlink') {
        const value = node.content.map((child: any) => getNodeText(child)).join('');

        const href = node.data.uri;

        return `<>${value}[${href}]</>`;
      }

      if (node.content) {
        const separator =
          node.nodeType === 'unordered-list' || node.nodeType === 'ordered-list' || node.nodeType === 'list-item'
            ? ' '
            : '';

        return node.content.map((child: any) => getNodeText(child)).join(separator);
      }

      return '';
    };

    article.fields.content.forEach((section: any) => {
      let sectionText = '';

      if (!section || !section.fields) return;

      section.fields.content.content.forEach((node: any) => {
        if (node.nodeType === 'paragraph' || node.nodeType === 'unordered-list' || node.nodeType === 'ordered-list') {
          sectionText += `${getNodeText(node)} `;
        }
      });

      sectionText = sectionText.trim().replace(/,\s*$/, '');

      items.push({
        entryTitle: section.fields.entryTitle,
        content: sectionText.toLowerCase(),
      });
    });

    finalArray.push({
      id,
      slug,
      keywordLinks,
      sections: items,
    });
  });

  return finalArray;
};

export default reStructureArticles;
