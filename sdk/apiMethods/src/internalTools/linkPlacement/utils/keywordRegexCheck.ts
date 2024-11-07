const keywordRegexCheck = (keyword: string, content: string) => {
  /**
   * Matches the pattern <>keyword[path]</>, where both `keyword` and `path` are dynamic.
   * Capturing groups:
   * - Group 1: The dynamic keyword, which may optionally have an "s", "’s", "'s" or "es" suffix.
   * - Group 2: The dynamic path inside the square brackets [].
   * Example matches:
   * - - <>hiros[hiros-gwanos-hemp]</>
   * - - <>erhall[cycle]</>
   * - - <>gwanos hemp[special-case]</>
   */
  const wrappedRegex = new RegExp(`<>(${keyword})(?:s|’s|'s|es)?\\[(.*?)\\]</>`, 'g');

  const wrappedMatches = Array.from(content.matchAll(wrappedRegex));

  const wrappedMatchesObj = wrappedMatches.map((match) => ({
    fullMatch: match[0],
    keyword,
    href: match[2],
    index: match.index,
  }));

  return wrappedMatchesObj;
};

export default keywordRegexCheck;
