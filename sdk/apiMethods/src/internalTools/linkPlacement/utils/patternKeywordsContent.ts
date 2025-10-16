import { splitTextAtPositions } from '../../../utils';

const patternKeywordsContent = (keyword: string, content: string) => {
  const keywordRegex = new RegExp(`(?<![>[\\[\\w])\\b(${keyword})(?:(?:\u2019s|'s|s|es)\\b)?(?![-\\w\\]])`, 'g');

  const keywordMatches = Array.from(content.matchAll(keywordRegex));

  const indexList = keywordMatches.map((match) => match.index);

  const splitContent = splitTextAtPositions(content, indexList);

  const secondSplitContent = splitContent.map((part, index) => {
    if (index === 0) return part;

    const modifiedPart = part.replace(new RegExp(`\\b(${keyword})(?:’s|'s|s|es)?\\b`), (match) => {
      if ((match.endsWith("'s") || match.endsWith('’s')) && match !== keyword) {
        return `<>${keyword}'s[]</>`;
      }

      if (match.endsWith('es') && match !== keyword) {
        return `<>${keyword}es[]</>`;
      }

      if (match.endsWith('s') && match !== keyword) {
        return `<>${keyword}s[]</>`;
      }

      return `<>${keyword}[]</>`;
    });

    return modifiedPart;
  });

  return secondSplitContent.join('');
};

export default patternKeywordsContent;
