import { Fragment, useEffect, useRef } from 'react';

import { MyWikiResponseType } from '@unity/types';

import MyWikiChatMessage from '../MyWikiChatMessage';

type MyWikiConversationProps = {
  conversation: MyWikiResponseType;
};

const MyWikiConversation = ({ conversation }: MyWikiConversationProps) => {
  const lastQuestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastQuestionRef.current) {
      lastQuestionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [conversation]);

  if (!conversation?.messages) return <></>;

  const { messages } = conversation;
  return (
    <div data-component="MyWikiConversation" className="flex-1 overflow-y-auto pb-4">
      {messages.map((message, index) => (
        <Fragment key={`MyWikiConversation-fragment-${index}`}>
          <MyWikiChatMessage
            key={`MyWikiConversation-${index}`}
            message={message}
            ref={index !== messages.length - 1 ? lastQuestionRef : null}
          >
            {message.content}
          </MyWikiChatMessage>
        </Fragment>
      ))}
    </div>
  );
};

export default MyWikiConversation;
