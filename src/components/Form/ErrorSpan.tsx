import { HTMLProps, ReactNode } from 'react';

type ErrorSpanProps = HTMLProps<HTMLSpanElement> & {
  children: ReactNode;
};

const ErrorSpan = ({ children, ...rest }: ErrorSpanProps) => {
  console.log('');

  return (
    <span className="" {...rest}>
      {children}
    </span>
  );
};

export default ErrorSpan;
