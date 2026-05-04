import createEmbedding from './utils/createEmbedding';
import openAiAnswer from './utils/openAiAnswer';
import saveMessagesInMongoDB from './utils/saveMessagesInMongoDB';
import vectorSearch from './utils/vectorSearch';

const myWiki = async (userId: string, query: string) => {
  /** Create an embed for the user query */
  const queryEmbedding = await createEmbedding(query);

  /** Search MongoDB using $vectorSearch */
  const vectorSearchResults = await vectorSearch(queryEmbedding);

  /** Build context block */
  const contextText = vectorSearchResults.map((result) => result.content).join('\n\n');

  /** Get answer from OpenAI using context */
  const answer = await openAiAnswer(query, contextText);

  const updatedConversation = await saveMessagesInMongoDB(userId, query, answer);

  return updatedConversation;
};

export default myWiki;
