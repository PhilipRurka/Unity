import clsx from 'clsx';
import { ReactNode, useContext, useEffect } from 'react';

import { CloseIcon } from '@/Components/Icons';
import { HeaderContext } from '@/Providers/contexts/HeaderContextProvider';

type ModalProps = {
  children: ReactNode;
  backgroundStyle?: string;
  title: string;
  handleCloseModal: () => void;
};

const Modal = ({ children, title, backgroundStyle = '', handleCloseModal }: ModalProps) => {
  const { isSearchModalOpen, handleIsSearchModalOpen } = useContext(HeaderContext);

  const handleTriggerClose = () => {
    handleCloseModal();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.code === 'Escape') {
        handleIsSearchModalOpen(false);
      }
    };

    if (isSearchModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (isSearchModalOpen) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isSearchModalOpen]);

  return (
    <div className="pointer-events-none fixed inset-0">
      <div
        className={clsx(
          'absolute inset-0 z-40 bg-black transition-opacity',
          isSearchModalOpen ? 'pointer-events-auto opacity-80' : 'pointer-events-none opacity-0'
        )}
        onClick={handleTriggerClose}
      />
      <div
        className={clsx(
          'sm:right-initial absolute left-0 right-0 top-16 z-50 sm:left-1/2 sm:-translate-x-1/2 sm:transform',
          'h-full max-h-modal w-full max-w-modal rounded-xl transition-opacity',
          isSearchModalOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          backgroundStyle,
          backgroundStyle && 'bg-cover'
        )}
      >
        <div className={clsx('h-full max-h-modal rounded-xl', backgroundStyle && 'bg-white bg-opacity-90 py-8')}>
          <div className="relative mb-3">
            <span className="ml-8 text-2xl md:text-3xl">{title}</span>
            <button className="absolute right-8 top-0" onClick={handleTriggerClose}>
              <CloseIcon size="10" />
            </button>
          </div>
          <div className="relative h-search-results overflow-y-hidden">
            <div className="h-full overflow-y-scroll px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
