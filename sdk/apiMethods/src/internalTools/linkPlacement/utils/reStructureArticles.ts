import { ArticleType, FinalItems, ReStructureForArticleLinkCheck } from '@unity/types';

const reStructureArticles = (articles: ArticleType[]) => {
  const finalArray: ReStructureForArticleLinkCheck = [];

  articles.forEach((article) => {
    const { slug, keywordLinks } = article.fields;
    const { id } = article.sys;
    const items: FinalItems = [];

    article.fields.content.forEach((section) => {
      let sectionText = '';

      if (!section || !section.fields) return;

      section.fields.content.content.forEach((node) => {
        if (node.nodeType === 'paragraph') {
          node.content.forEach((textNode) => {
            if (textNode.nodeType === 'text') {
              const textNodeValue = textNode.value;
              const isTextNodeValueLastSpace = textNodeValue.charAt(textNodeValue.length - 1) === ' ';
              const isSectionTextValueLastSpace = sectionText.charAt(textNodeValue.length - 1) === ' ';

              if (!isSectionTextValueLastSpace) {
                sectionText += ' ';
              }

              sectionText += `${textNodeValue}${isTextNodeValueLastSpace ? '' : ' '}`;
            } else if (textNode.nodeType === 'hyperlink') {
              const href = textNode.data.uri;

              const value = textNode.content
                .map((linkNode) => {
                  if (linkNode.nodeType !== 'text') return '';
                  return linkNode.value;
                })
                .join('');
              sectionText += `<>${value}[${href}]</>`;
            }
          });

          sectionText = sectionText.trim().replace(/,\s*$/, '');
        }
      });

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
