import clsx from 'clsx';
import React, { ReactNode, useEffect } from 'react';

import { CloseIcon } from '../Icons';

type ModalProps = {
  children: ReactNode;
  backgroundStyle?: string;
  title: string;
  isModalOpen: boolean;
  handleCloseModal: () => void;
};

const Modal = ({ children, title, backgroundStyle = 'bg-white', isModalOpen, handleCloseModal }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.code === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (isModalOpen) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isModalOpen]);

  return (
    <div className="pointer-events-none fixed inset-0">
      <div
        className={clsx(
          'absolute inset-0 z-40 bg-black transition-opacity',
          isModalOpen ? 'pointer-events-auto opacity-80' : 'pointer-events-none opacity-0'
        )}
        onClick={handleCloseModal}
      />
      <div
        className={clsx(
          'absolute inset-0 z-50 h-full w-full bg-cover transition-opacity',
          'sm:right-initial sm:left-1/2 sm:top-16 sm:max-h-modal sm:max-w-modal sm:-translate-x-1/2 sm:transform sm:rounded-xl',
          isModalOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          backgroundStyle
        )}
      >
        <div className={clsx('h-full sm:max-h-modal sm:rounded-xl', backgroundStyle && 'bg-white bg-opacity-90 py-8')}>
          <div className="relative mb-3">
            <span className="ml-8 text-2xl md:text-3xl">{title}</span>
            <button className="absolute right-8 top-0" onClick={handleCloseModal}>
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
