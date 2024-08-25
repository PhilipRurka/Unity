import clsx from 'clsx';
import React, { HTMLProps, forwardRef } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  showErrorStyles?: boolean;
  isInlineWithContent?: boolean;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ showErrorStyles, isInlineWithContent, className, ...rest }, ref) => (
    <input
      className={clsx(
        'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900',
        'focus:border-blue-500 focus:ring-blue-500',
        'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
        'read-only:border-transparent read-only:bg-transparent read-only:outline-none read-only:ring-transparent read-only:focus:border-transparent',
        isInlineWithContent && '-ml-2.5',
        showErrorStyles ? 'border-red-500' : 'border-black',
        className
      )}
      {...rest}
      ref={ref}
    />
  )
);

Input.displayName = 'Input';

export default Input;
