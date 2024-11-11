type GetInvalidLinksProps = {
  content: string;
  listOfKeywordsMap: Record<string, boolean>;
  listOfArticleSlugs: string[];
};

type InvalidLink = {
  fullMatch: string;
  text: string;
  href: string;
};

const getInvalidLinks = ({ content, listOfKeywordsMap, listOfArticleSlugs }: GetInvalidLinksProps) => {
  const invalidLinks: InvalidLink[] = [];

  const wrappedRegex = /<>((?:\w|\s)*?)(?:s|’s|'s|es)?\[(.*?)\]<\/>/g;

  const wrappedMatches = Array.from(content.matchAll(wrappedRegex));

  const wrappedMatchesObj = wrappedMatches.map((match) => ({
    fullMatch: match[0],
    text: match[1],
    href: match[2],
  }));

  wrappedMatchesObj.forEach(({ fullMatch, text, href }) => {
    if (listOfKeywordsMap[text]) return;

    if (listOfArticleSlugs.includes(href)) return;

    invalidLinks.push({ fullMatch, text, href });
  });

  return invalidLinks;
};

export default getInvalidLinks;
