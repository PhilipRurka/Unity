import clsx from 'clsx';
import { HTMLProps, forwardRef } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  showErrorStyles: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ showErrorStyles, ...rest }, ref) => {
  console.log('');

  return (
    <input
      className={clsx(
        'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
        showErrorStyles ? 'border-red-500' : 'border-black'
      )}
      {...rest}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';

export default Input;
