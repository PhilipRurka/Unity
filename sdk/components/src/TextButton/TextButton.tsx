import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type TextButtonProps = TextButtonContentProps & {
  link?: string;
};

type TextButtonContentProps = {
  color: 'green' | 'amber' | 'red' | 'blue';
  children: React.ReactNode;
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  onClick?: () => void;
};

const TextButtonContent = ({ color, children, type, disabled, onClick }: TextButtonContentProps) => {
  const attributes = type ? { type } : {};

  return (
    <button
      className={clsx(
        'text-base',
        color === 'green' && 'text-green-600 hover:text-green-700',
        color === 'amber' && 'text-amber-600 hover:text-amber-700',
        color === 'red' && 'text-red-600 hover:text-red-700',
        color === 'blue' && 'text-blue-600 hover:text-blue-700'
      )}
      onClick={onClick}
      disabled={disabled}
      {...attributes}
    >
      {children}
    </button>
  );
};

const TextButton = ({ link, children, ...rest }: TextButtonProps) => (
  <div data-component="TextButton">
    {link ? (
      <Link href={link}>
        <TextButtonContent {...rest}>{children}</TextButtonContent>
      </Link>
    ) : (
      <TextButtonContent {...rest}>{children}</TextButtonContent>
    )}
  </div>
);

export default TextButton;
