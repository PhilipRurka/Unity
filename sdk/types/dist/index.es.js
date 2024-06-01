function isTypeArticle(entry) {
  return entry.sys.contentType.sys.id === "article";
}

function isTypeCaptainsLog(entry) {
  return entry.sys.contentType.sys.id === "captainsLog";
}

function isTypeContentSection(entry) {
  return entry.sys.contentType.sys.id === "contentSection";
}

function isTypeHierarchyLayout(entry) {
  return entry.sys.contentType.sys.id === "hierarchyLayout";
}

function isTypeHierarchyLink(entry) {
  return entry.sys.contentType.sys.id === "hierarchyLink";
}

function isTypeInfobox(entry) {
  return entry.sys.contentType.sys.id === "infobox";
}

function isTypeInfoboxBlock(entry) {
  return entry.sys.contentType.sys.id === "infoboxBlock";
}

function isTypeInfoboxItem(entry) {
  return entry.sys.contentType.sys.id === "infoboxItem";
}

function isTypeLink(entry) {
  return entry.sys.contentType.sys.id === "link";
}

export { isTypeArticle, isTypeCaptainsLog, isTypeContentSection, isTypeHierarchyLayout, isTypeHierarchyLink, isTypeInfobox, isTypeInfoboxBlock, isTypeInfoboxItem, isTypeLink };
//# sourceMappingURL=index.es.js.map
