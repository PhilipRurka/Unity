import clsx from 'clsx';
import { forwardRef } from 'react';

import { MyWikiMessage } from '@unity/types';

type MyWikiChatMessageProps = {
  children: React.ReactNode;
  message: MyWikiMessage;
};

const MyWikiChatMessage = forwardRef<HTMLDivElement, MyWikiChatMessageProps>(({ children, message }, ref) => (
  <div
    data-component="MyWikiChatMessage"
    className={clsx('my-4 flex', message.role === 'user' && 'justify-end')}
    ref={ref}
  >
    <p
      className={clsx(
        'inline-block rounded p-4',
        message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
      )}
    >
      {children}
    </p>
  </div>
));

MyWikiChatMessage.displayName = 'MyWikiChatMessage';

export default MyWikiChatMessage;
