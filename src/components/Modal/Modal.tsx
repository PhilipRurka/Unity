import clsx from 'clsx';
import { ReactNode } from 'react';

import { CloseIcon } from '@/Components/Icons';

type ModalProps = {
  children: ReactNode;
  handleCloseModal: () => void;
};

const Modal = ({ children, handleCloseModal }: ModalProps) => {
  const handleTriggerClose = () => {
    handleCloseModal();
  };

  return (
    <div className="fixed inset-0 z-10">
      <div className="absolute inset-0 z-40 bg-black opacity-80" onClick={handleTriggerClose} />
      <div
        className={clsx(
          'absolute left-1/2 top-16 z-50 -translate-x-1/2 transform',
          'max-h-modal w-full max-w-modal overflow-hidden rounded-xl bg-white p-8'
        )}
      >
        <button onClick={handleTriggerClose}>
          <CloseIcon size="8" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
