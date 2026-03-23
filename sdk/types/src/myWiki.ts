export type MyWikiChatMessagesType = MyWikiResponseType & {
  userId: string;
};

export type MyWikiMessage = {
  role: 'user' | 'assistant';
  content: string;
  createdAt?: Date;
};

export type MyWikiResponseType = {
  messages: MyWikiMessage[];
  createdAt?: Date;
};
