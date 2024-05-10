import clsx from 'clsx';
import { ReactNode } from 'react';

import { CloseIcon } from '@/Components/Icons';

const sizes = {
  sm: 150,
  md: 200,
  lg: 250,
};

type ModalProps = {
  children: ReactNode;
  width: 'sm' | 'md' | 'lg';
  handleCloseModal: () => void;
};

const Modal = ({ children, width, handleCloseModal }: ModalProps) => {
  const handleTriggerClose = () => {
    handleCloseModal();
  };

  const size = `w-${sizes[width]}`;

  return (
    <div className="fixed inset-0 z-10">
      <div className="absolute inset-0 bg-black opacity-80" onClick={handleTriggerClose} />
      <div
        className={clsx(
          'absolute left-1/2 top-24 max-h-modal -translate-x-1/2 transform overflow-hidden',
          'max-w-2xl rounded-xl bg-white p-8',
          size
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
