type BuildQueryWithContext = (query: string, context: string) => string;

const buildQueryWithContext: BuildQueryWithContext = (query, context) => {
  if (!context) return query;

  const preContext = `The following is the conversation history between the user and the assistant. The assistant should use this information to answer the user's question.\n\n${context}\n\n`;

  return `Context:\n${preContext}\n\nQuestion:\n${query}`;
};

export default buildQueryWithContext;
