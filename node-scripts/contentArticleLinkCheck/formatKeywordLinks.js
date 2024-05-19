const formatKeywordLinks = (articles) => {
  const extractedArrays = articles.map(({ fields: item }) => ({
    slug: item.slug,
    keywords: item.keywordLinks || [],
  }));

  return extractedArrays.flat();
};

export default formatKeywordLinks;
