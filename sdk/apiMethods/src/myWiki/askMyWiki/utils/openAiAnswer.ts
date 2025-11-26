import OpenAI from 'openai';

const openAiAnswer = async (query: string, context: string) => {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const answer = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `
        You are a factual assistant for a compendium/wiki. 
        You must answer ONLY using the provided context.
        If the answer is not in the context, say “I don’t know”.

        Rules:
        - Do NOT invent content.
        - Do NOT speculate.
        - Only use the facts in the context.
      `,
      },
      { role: 'system', content: `Context:\n${context}` },
      { role: 'user', content: query },
    ],
  });

  return answer.choices[0].message?.content ?? "I don't know";
};

export default openAiAnswer;
