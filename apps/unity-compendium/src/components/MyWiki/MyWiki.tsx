import clsx from 'clsx';
import { useContext, useEffect, useRef, useState } from 'react';

import { Button, TextArea } from '@unity/components';
import { MyWikiResponseType } from '@unity/types';

import askMyWiki from '@/Fetchers/myWiki/askMyWiki';
import getMyWiki from '@/Fetchers/myWiki/getMyWiki';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

import MyWikiConversation from '../MyWikiConversation';

type TimeToDeletion =
  | undefined
  | {
      hours: string;
      minutes: string;
    };

const MyWiki = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const isDisabledRef = useRef<boolean>(false);
  const { isMyWikiModalOpen } = useContext(HeaderContext);

  const [conversation, setConversation] = useState<MyWikiResponseType>();
  const [timeToDeletion, setTimeToDeletion] = useState<TimeToDeletion>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!textAreaRef.current) return;
    const question = textAreaRef.current.value.trim();
    if (!question || isDisabledRef.current) return;

    setIsLoading(true);

    isDisabledRef.current = true;

    const response = await askMyWiki(textAreaRef.current.value);

    setConversation(response);
    textAreaRef.current.value = '';
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSubmit();
      }
    };

    if (textarea) {
      textarea.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  useEffect(() => {
    if (isMyWikiModalOpen) {
      textAreaRef.current?.focus();

      const getData = async () => {
        const data = await getMyWiki();
        setConversation(data);
      };

      getData();
    }
  }, [isMyWikiModalOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (conversation?.createdAt) {
      const createdAt = new Date(conversation.createdAt).getTime();
      const expiryMs = 24 * 60 * 60 * 1000; /** 24 hours */
      const expiresAt = createdAt + expiryMs;

      const updateTimeLeft = () => {
        const now = Date.now();
        const diffMs = expiresAt - now;

        if (diffMs <= 0) {
          setTimeToDeletion({
            hours: '00',
            minutes: '00',
          });
          return;
        }

        const totalMinutes = Math.ceil(diffMs / (1000 * 60));
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        setTimeToDeletion({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
        });
      };

      updateTimeLeft();

      interval = setInterval(updateTimeLeft, 60 * 1000);

      setIsLoading(false);
      isDisabledRef.current = false;
    }

    return () => {
      clearInterval(interval);
    };
  }, [conversation]);

  return (
    <div data-component="MyWiki" className={clsx('flex h-my-wiki flex-col pt-6', !isMyWikiModalOpen && 'hidden')}>
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 bg-slate-600 opacity-0 transition-opacity ease-linear',
          isLoading && 'pointer-events-auto opacity-40'
        )}
      />
      <div className="flex items-start gap-4">
        <TextArea ref={textAreaRef} className="flex-1 resize-none" />
        <Button color="green" isFull size="medium" onClick={handleSubmit}>
          Ask
        </Button>
      </div>
      {timeToDeletion && (
        <span className="mb-2">{`Conversation will be deleted in ${timeToDeletion.hours}:${timeToDeletion.minutes} hours`}</span>
      )}
      {conversation && <MyWikiConversation conversation={conversation} />}
    </div>
  );
};

export default MyWiki;
