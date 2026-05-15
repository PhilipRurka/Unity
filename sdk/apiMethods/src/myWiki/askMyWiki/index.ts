import buildQueryWithContext from './utils/buildQueryWithContext';
import createEmbedding from './utils/createEmbedding';
import getConversation from './utils/getConversation';
import openAiAnswer from './utils/openAiAnswer';
import saveMessagesInMongoDB from './utils/saveMessagesInMongoDB';
import vectorSearch from './utils/vectorSearch';

const myWiki = async (userId: string, query: string) => {
  /** Get conversation history from MongoDB */
  const context = await getConversation(userId);

  const queryWithContext = buildQueryWithContext(query, context);

  /** Create an embed for the user query */
  const queryEmbedding = await createEmbedding(queryWithContext);

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
