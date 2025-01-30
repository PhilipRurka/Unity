import clsx from 'clsx';
import React, { HTMLProps, forwardRef } from 'react';

type TextAreaProps = HTMLProps<HTMLTextAreaElement> & {
  showErrorStyles?: boolean;
  className?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ showErrorStyles, className, ...rest }, ref) => (
  <textarea
    className={clsx(
      'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900',
      'focus:border-blue-500 focus:ring-blue-500',
      'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
      'read-only:border-transparent read-only:bg-transparent read-only:outline-none read-only:ring-transparent read-only:focus:border-transparent',
      showErrorStyles ? 'border-red-500' : 'border-black',
      className
    )}
    {...rest}
    ref={ref}
  />
));

TextArea.displayName = 'TextArea';

export default TextArea;
