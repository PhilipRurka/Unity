import { ArticleType, ReStructureForCaptainsLogLinkCheck } from '@unity/types';

const reStructureArticles = (articles: ArticleType[]) => {
  const finalArray: ReStructureForCaptainsLogLinkCheck[] = [];

  articles.forEach((article) => {
    const {
      fields: { slug },
      sys: { id },
    } = article;

    let markUnderlineCount = 0;

    article.fields.content.forEach((section) => {
      section?.fields.content.content.forEach((node) => {
        if (node.nodeType === 'paragraph') {
          node.content.forEach((textNode) => {
            if (textNode.nodeType === 'text') {
              textNode.marks.forEach((mark) => {
                if (mark.type !== 'underline') return;

                markUnderlineCount += 1;
              });
            }
          });
        }
      });
    });

    if (markUnderlineCount === 0) return;

    finalArray.push({
      id,
      slug,
      markUnderlineCount,
    });
  });

  return finalArray;
};

export default reStructureArticles;
