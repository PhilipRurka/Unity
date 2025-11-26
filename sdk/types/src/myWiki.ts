export type MyWikiChatMessagesType = MyWikiResponseType & {
  userId: string;
};

export type MyWikiResponseType = {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    createdAt?: Date;
  }>;
  createdAt?: Date;
};
