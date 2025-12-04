import clsx from 'clsx';

import { MyWikiResponseType } from '@unity/types';

type MyWikiConversationProps = {
  conversation: MyWikiResponseType;
};

const MyWikiConversation = ({ conversation }: MyWikiConversationProps) => (
  <div data-component="MyWikiConversation" className="flex-1 overflow-y-auto pb-4">
    {conversation?.messages.map((message, index) => (
      <div key={`MyWikiConversation-${index}`} className={clsx('my-4 flex', message.role === 'user' && 'justify-end')}>
        <p
          className={clsx(
            'inline-block rounded p-4',
            message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
          )}
        >
          {message.content}
        </p>
      </div>
    ))}
  </div>
);

export default MyWikiConversation;
