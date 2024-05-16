const uploadArticlesOnAlgolia = async (index, algoliaRecords) => {
  await index.replaceAllObjects(algoliaRecords, { autoGenerateObjectIDIfNotExist: true });
  return undefined;
};

export default uploadArticlesOnAlgolia;
