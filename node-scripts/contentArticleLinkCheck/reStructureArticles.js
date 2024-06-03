const reStructureArticles = (articles) => {
  const finalArray = [];

  articles.forEach((article) => {
    const { slug, keywordLinks } = article.fields;
    const { id } = article.sys;
    const items = [];

    article.fields.content.forEach((section) => {
      let sectionText = '';

      section.fields.content.content.forEach((node) => {
        if (node.nodeType === 'paragraph') {
          node.content.forEach((textNode) => {
            if (textNode.nodeType === 'text') {
              const textNodeValue = textNode.value;
              const isTextNodeValueFirstComma = textNodeValue.charAt(0) === ',';
              const isTextNodeValueLastSpace = textNodeValue.charAt(textNodeValue.length - 1) === ' ';
              const isSectionTextValueLastSpace = sectionText.charAt(textNodeValue.length - 1) === ' ';

              if (!isSectionTextValueLastSpace) {
                sectionText += ' ';
              }

              if (isTextNodeValueFirstComma) {
                sectionText = sectionText.slice(0, -1);
              }

              sectionText += `${textNodeValue}${isTextNodeValueLastSpace ? '' : ' '}`;
            } else if (textNode.nodeType === 'hyperlink') {
              const value = textNode.content.map((linkNode) => linkNode.value).join('');
              sectionText += `<>${value}</>`;
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
