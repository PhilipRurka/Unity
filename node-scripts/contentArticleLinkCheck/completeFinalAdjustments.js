const listOfKeyWords = [
  {
    slug: 'silencers',
    keywords: ['silencers'],
  },
  {
    slug: 'unity-race',
    keywords: ['unity'],
  },
  {
    slug: 'citizenship',
    keywords: ['sônha', 'paiiram', 'amuwegs'],
  },
  {
    slug: 'luruntan',
    keywords: ['luruntan'],
  },
  {
    slug: 'learning-institutions',
    keywords: [],
  },
  {
    slug: 'trade-work',
    keywords: [],
  },
  {
    slug: 'purooth',
    keywords: ['purooth'],
  },
  {
    slug: 'kitnapana',
    keywords: ['kitnapana'],
  },
  {
    slug: 'felthairam',
    keywords: ['felthairam'],
  },
  {
    slug: 'hierarchies-wisdom',
    keywords: ['inig', 'segrins', 'aissan'],
  },
  {
    slug: 'purrta',
    keywords: ['purrta'],
  },
  {
    slug: 'erhall',
    keywords: ['erhall'],
  },
  {
    slug: 'traditions-of-transition',
    keywords: [],
  },
  {
    slug: 'alath-trr',
    keywords: ['alath-trr'],
  },
  {
    slug: 'hiros-gwanos-hemp',
    keywords: ['hiros', 'gwanos hemp'],
  },
  {
    slug: 'humul-tress',
    keywords: ['humul tress'],
  },
  {
    slug: 'luntha-nos',
    keywords: ['luntha nôs'],
  },
  {
    slug: 'amro-hom',
    keywords: ['amro hom'],
  },
  {
    slug: 'endlesin-glen',
    keywords: ['endlesin glen'],
  },
];

const completeFinalAdjustments = (articles) => {
  const articlesKeywordsCheck = [];

  articles.forEach(({ id, slug: articleSlug, sections }) => {
    const listOfTrackedKeywords = [];
    const listOfMissPlacedLinks = [];
    const missingLinks = [];

    for (let i = 0; i < sections.length; i += 1) {
      const { entryTitle, content } = sections[i];

      listOfKeyWords.forEach(({ slug, keywords }) => {
        keywords.forEach((keyword) => {
          if (articleSlug === slug) return;

          const wrappedRegex = new RegExp(`<>${keyword}</>`, 'g');
          const keywordRegex = new RegExp(keyword, 'g');

          const wrappedMatches = [...content.matchAll(wrappedRegex)];
          const keywordMatches = [...content.matchAll(keywordRegex)];

          if (keywordMatches.length > 0) {
            const firstKeywordMatches = keywordMatches[0];

            if (wrappedMatches.length > 0) {
              const firstWrappedMatches = wrappedMatches[0];

              const isWrappedKeywordFirst = firstKeywordMatches.index - 2 === firstWrappedMatches.index;

              if (isWrappedKeywordFirst) {
                /** The <>keyword</> is the first keyword in content */
                if (!listOfTrackedKeywords.includes(keyword)) {
                  listOfTrackedKeywords.push(keyword);
                } else {
                  listOfMissPlacedLinks.push({
                    entryTitle,
                    slug,
                    keyword,
                  });
                }

                wrappedMatches.shift();
              }

              if (wrappedMatches.length > 0) {
                wrappedMatches.forEach(() => {
                  listOfMissPlacedLinks.push({
                    entryTitle,
                    slug,
                    keyword,
                  });
                });
              }
            }

            if (!listOfTrackedKeywords.includes(keyword)) {
              listOfTrackedKeywords.push(keyword);

              missingLinks.push({
                entryTitle,
                slug,
                keyword,
              });
            }
          }
        });
      });
    }

    articlesKeywordsCheck.push({
      id,
      slug: articleSlug,
      listOfTrackedKeywords,
      listOfMissPlacedLinks,
      missingLinks,
    });
  });

  return articlesKeywordsCheck;
};

export default completeFinalAdjustments;
